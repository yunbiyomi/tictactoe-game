import React, { useState } from 'react'
import styled from 'styled-components'
import Square from './Square'

const GameBoard = ({ size, currentPlayer, player1Mark, player2Mark, setCurrentPlayer, winCondition }) => {
  const [board, setBoard] = useState(Array(size).fill(Array(size).fill('')));

  // 승리 조건을 검사하는 함수
  const checkWin = (row, col) => {
    const markToCheck = currentPlayer === 'player1' ? player1Mark : player2Mark;

    // 가로, 세로, 대각선 방향으로 승리 조건을 검사합니다.
    const directions = [
      [[0, 1], [0, -1]], // 가로
      [[1, 0], [-1, 0]], // 세로
      [[1, 1], [-1, -1]], // 대각선 (왼쪽 위에서 오른쪽 아래)
      [[1, -1], [-1, 1]] // 대각선 (오른쪽 위에서 왼쪽 아래)
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

      if (count >= winCondition) {
        return true; // 승리 조건 충족
      }
    }

    return false;
  };

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

      // 게임 종료 여부 검사
      if (checkWin(row, col)) {
        setTimeout(() => {
          alert(`${currentPlayer}가 승리하였습니다!`);
        }, 0);
        setCurrentPlayer(null);
        // 게임 종료 후 필요한 작업 수행
      } else {
        setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
      }
    }
  };

  // size의 수만큼 칸을 생성해주는 함수
  const renderRows = () => {
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
      {renderRows()}
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
