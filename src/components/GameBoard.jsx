import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Square from './Square'

const GameBoard = ({ size, currentPlayer, player1Mark, player2Mark, setCurrentPlayer, winCondition }) => {
  const [board, setBoard] = useState(Array(size).fill(Array(size).fill('')));

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
    if(checkDraw()) {
      setTimeout(() => {
        alert(`무승부입니다!`);
      }, 0);
      setCurrentPlayer(null);
    }
  }, [board])

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

      // 승리 조건을 갖추었는지 확인
      if (checkWin(row, col)) {
        setTimeout(() => {
          alert(`${currentPlayer}가 승리하였습니다!`);
        }, 0);
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
