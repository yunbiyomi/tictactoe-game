import React from 'react'
import styled from 'styled-components'
import Square from './Square'

const GameBoard = ({ size }) => {
  // size수만큼 칸 생성해주는 함수
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < size; i++) {
      const rowSquares = [];
      for (let j = 0; j < size; j++) {
        rowSquares.push(<Square key={`${i * size + j}`} value=''/>);
      }
      rows.push(
        <GameBoardRow key={i}>
          {rowSquares}
        </GameBoardRow>
      );
    }
    return rows;
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
