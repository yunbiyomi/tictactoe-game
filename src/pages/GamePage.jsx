import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import GameBoard from '../components/GameBoard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GamePage = () => {
  const gameBoardSize = useSelector(state => state.gameSettings.gameBoardSize);
  const winCondition = useSelector(state => state.gameSettings.winCondition);
  const player1Mark = useSelector(state => state.gameSettings.player1Mark);
  const player2Mark = useSelector(state => state.gameSettings.player2Mark);
  const player1MarkColor = useSelector(state => state.gameSettings.player1MarkColor);
  const player2MarkColor = useSelector(state => state.gameSettings.player2MarkColor);
  const startPlayer = useSelector(state => state.gameSettings.startPlayer);

  const [currentPlayer, setCurrentPlayer] = useState(null);

  // 시작 플레이어 선택에 따라 먼저 시작할 플레이어 정해주는 함수
  useEffect(() => {
    if(startPlayer === 'random') {
      const randomplayer = Math.random() < 0.5 ? 'player1' : 'player2';
      setCurrentPlayer(randomplayer);
    } else {
      setCurrentPlayer(startPlayer);
    }
  }, [startPlayer]);

  return (
    <div>
      {gameBoardSize}
      {winCondition}
      {player1Mark}
      {player2Mark}
      {player1MarkColor}
      {player2MarkColor}
      {startPlayer}
      {
        currentPlayer ?
          <STitle>현재 {currentPlayer}</STitle> :
          <STitle>게임이 끝났습니다.</STitle>
      }
      <GameBoard size={gameBoardSize} currentPlayer={currentPlayer} player1Mark={player1Mark} player2Mark={player2Mark} setCurrentPlayer={setCurrentPlayer} winCondition={winCondition}/>
      <SLink to='/'>홈으로 돌아가기</SLink>
    </div>
  )
}

export default GamePage

const STitle = styled.div`
  font-size: 30px;
`;

const SLink = styled(Link)`
`;