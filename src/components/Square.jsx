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
  width: 100px;
  height: 100px;
  border: 5px solid black;
  color: ${props => props.color};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
`;