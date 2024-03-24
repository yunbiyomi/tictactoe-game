import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Square from './Square'
import { useDispatch } from 'react-redux';
import { updateBoardHistory } from '../redux/boardActions'

const GameBoard = ({ size, currentPlayer, player1Mark, player2Mark, setCurrentPlayer, winCondition, player1Time, setPlayer1Time, player2Time, setPlayer2Time }) => {
  const initialBoard = Array(size).fill(null).map(() => Array(size).fill(''));
  const [board, setBoard] = useState(initialBoard);
  const [isEnd, setIsEnd] = useState(false);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [historyBoard, setHistoryBoard] = useState([]);
  const dispatch = useDispatch();

  // 각 플레이어 별 시간 계산 함수
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentPlayer === 'player1') {
        setPlayer1Time(prevTime => prevTime - 1);
      } else if (currentPlayer === 'player2') {
        setPlayer2Time(prevTime => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentPlayer]);

  // 15초 경과시 다른 플레이어로 넘어가는 함수
  useEffect(() => {
    if (currentPlayer === 'player1' && player1Time === 0) {
      handleTimeOut('player1');
    } else if (currentPlayer === 'player2' && player2Time === 0) {
      handleTimeOut('player2');
    }
    setIsTimeOut(false);
  }, [player1Time, player2Time]);

  // 15초 경과시 랜덤으로 마크 생성해주는 함수
  const handleTimeOut = (player) => {
    if(isTimeOut) return;

    const emptySquares = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] === '') {
          emptySquares.push({ row: i, col: j });
        }
      }
    }

    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const { row, col } = emptySquares[randomIndex];
      const newBoard = [...board];
      newBoard[row][col] = player === 'player1' ? player1Mark : player2Mark;
      setBoard(newBoard);
      setIsTimeOut(true);

      // 승리 조건을 갖추었는지 확인
      if (checkWin(row, col)) {
        setTimeout(() => {
          alert(`${currentPlayer}가 승리하였습니다!`);
        }, 0);
        setIsEnd(true);
        setCurrentPlayer(null);
      } else {
        setCurrentPlayer(player === 'player1' ? 'player2' : 'player1');
        player === 'player1' ? setPlayer1Time(15) : setPlayer2Time(15);
      }
    }
  };

  // 승리 조건을 갖추었는지 검사하는 함수
  const checkWin = (row, col) => {
    const markToCheck = currentPlayer === 'player1' ? player1Mark : player2Mark;

    const directions = [
      [[0, 1], [0, -1]], // 가로
      [[1, 0], [-1, 0]], // 세로
      [[1, 1], [-1, -1]], // 오른쪽 위 -> 왼쪽 아래
      [[1, -1], [-1, 1]] // 왼쪽 위 -> 오른쪽 아래
    ];

    for (const direction of directions) {
      let count = 1;

      for (const d of direction) {
        let r = row + d[0];
        let c = col + d[1];

        while (r >= 0 && r < size && c >= 0 && c < size && board[r][c] === markToCheck) {
          count++;
          r += d[0];
          c += d[1];
        }
      }

      if (count >= winCondition)
        return true;
    }
    
    return false;
  };

  // 무승부 확인 해주는 함수
  const checkDraw = () => {
    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size; j++) {
        if(board[i][j] === '')
          return false;
      }
    }
    return true;
  }

  useEffect(() => {
    if(!isEnd && checkDraw()) {
      setTimeout(() => {
        alert(`무승부입니다!`);
      }, 0);
      setCurrentPlayer(null);
      setIsEnd(true);
    }
    
    // 함수형 업데이트를 사용해 historyBoard 상태가 누락되지 않도록 보장
    setHistoryBoard(prevHistoryBoard => {
      const updatedHistoryBoard = [...prevHistoryBoard, board];
      if(isEnd) 
        dispatch(updateBoardHistory(updatedHistoryBoard));
      return updatedHistoryBoard;
    });
  }, [board, isEnd])

  // 칸 클릭시 플레이어 별 알맞은 마크 표시해주는 함수
  const handleSquareClick = (row, col) => {
    if (currentPlayer && board[row][col] === '') {
      const newBoard = board.map((rowArr, rowIndex) => {
        if (rowIndex === row) {
          return rowArr.map((val, colIndex) => {
            if (colIndex === col) {
              return currentPlayer === 'player1' ? player1Mark : player2Mark;
            }
            return val;
          });
        }
        return rowArr;
      });
      setBoard(newBoard);
      currentPlayer === 'player1' ? setPlayer1Time(15) : setPlayer2Time(15);

      // 승리 조건을 갖추었는지 확인
      if (checkWin(row, col)) {
        setTimeout(() => {
          alert(`${currentPlayer}가 승리하였습니다!`);
        }, 0);
        setIsEnd(true);
        setCurrentPlayer(null);
      } else {
        setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
      }
    }
  };

  // size의 수만큼 칸을 생성해주는 함수
  const renderSquares = () => {
    return board.map((rowArr, rowIndex) => (
      <GameBoardRow key={rowIndex}>
        {rowArr.map((val, colIndex) => (
          <Square
            key={`${rowIndex}-${colIndex}`}
            value={val}
            onClick={() => handleSquareClick(rowIndex, colIndex)}
          />
        ))}
      </GameBoardRow>
    ));
  }

  return (
    <GameBoardContainer>
      {renderSquares()}
    </GameBoardContainer>
  )
}

export default GameBoard

const GameBoardContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 5px solid black;
`;

const GameBoardRow = styled.div`
  display: flex;
`;
