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
  const startPlayer = useSelector(state => state.gameSettings.startPlayer);

  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [player1Time, setPlayer1Time] = useState(15);
  const [player2Time, setPlayer2Time] = useState(15);
  const [player1BackCount, setPlayer1BackCount] = useState(3);
  const [player2BackCount, setPlayer2BackCount] = useState(3);
  const [isBack, setIsBack] = useState(false);

  // 시작 플레이어 선택에 따라 먼저 시작할 플레이어 정해주는 함수
  useEffect(() => {
    if(startPlayer === 'random') {
      const randomplayer = Math.random() < 0.5 ? 'player1' : 'player2';
      setCurrentPlayer(randomplayer);
    } else {
      setCurrentPlayer(startPlayer);
    }
  }, [startPlayer]);

  // 무르기 버튼 클릭시 무르기 횟수 차감
  const handleBackBtn = () => {
    if ((currentPlayer === 'player1' && player2BackCount > 0) || (currentPlayer === 'player2' && player1BackCount > 0)) {
      setIsBack(true);
      currentPlayer === 'player1' ? setPlayer2BackCount(prev => prev - 1) : setPlayer1BackCount(prev => prev - 1);
    }
  }

  return (
    <GamepageContainer>
      <SP>player1Time {player1Time}</SP>
      <SP>player2Time {player2Time}</SP>
      <SP>player1 남은 무르기 횟수 : {player1BackCount}</SP>
      <SP>player2 남은 무르기 횟수 : {player2BackCount}</SP>
      {/* {gameBoardSize}
      {winCondition}
      {player1Mark}
      {player2Mark}
      {player1MarkColor}
      {player2MarkColor} */}
      {startPlayer}
      {
        currentPlayer ?
          <STitle>현재 {currentPlayer}</STitle> :
          <STitle>게임이 끝났습니다.</STitle>
      }
      <GameBoard
        size={gameBoardSize}
        currentPlayer={currentPlayer}
        player1Mark={player1Mark}
        player2Mark={player2Mark}
        setCurrentPlayer={setCurrentPlayer}
        winCondition={winCondition}
        player1Time={player1Time}
        setPlayer1Time={setPlayer1Time}
        player2Time={player2Time}
        setPlayer2Time={setPlayer2Time}
        isBack={isBack}
        setIsBack={setIsBack}
      />
      <SButton onClick={handleBackBtn}>무르기</SButton>
      <SLink to='/'>홈으로 돌아가기</SLink>
    </GamepageContainer>
  )
}

export default GamePage

const GamepageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const STitle = styled.div`
  font-size: 30px;
`;

const SLink = styled(Link)`
`;

const SP = styled.p`
`;

const SButton = styled.button`
`;