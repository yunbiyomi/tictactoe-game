import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Square = ({ value, onClick }) => {
  const player1Mark = useSelector(state => state.gameSettings.player1Mark);
  const player1MarkColor = useSelector(state => state.gameSettings.player1MarkColor);
  const player2MarkColor = useSelector(state => state.gameSettings.player2MarkColor);

  // 플레이어에 따른 마크 색 변경
  const markColor = value === player1Mark ? player1MarkColor : player2MarkColor;

  return (
    <SquareBox onClick={onClick} color={markColor}>
      {value}
    </SquareBox>
  )
}

export default Square

const SquareBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 5px solid var(--font-color);
  background-color: var(--game-board-color);
  color: ${props => props.color};
  box-sizing: border-box;
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
`;