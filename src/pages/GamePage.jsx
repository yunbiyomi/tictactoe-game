import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import GameBoard from '../components/GameBoard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GamePage = () => {
  const winCondition = useSelector(state => state.gameSettings.winCondition);
  const player1Mark = useSelector(state => state.gameSettings.player1Mark);
  const player2Mark = useSelector(state => state.gameSettings.player2Mark);
  const player1MarkColor = useSelector(state => state.gameSettings.player1MarkColor);
  const player2MarkColor = useSelector(state => state.gameSettings.player2MarkColor);
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
      <LeftBox>
        {
          currentPlayer ?
            <STitle>🕹️  : {currentPlayer}</STitle> :
            <STitle>게임이 끝났습니다.</STitle>
        }
        <GameBoard
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          player1Time={player1Time}
          setPlayer1Time={setPlayer1Time}
          player2Time={player2Time}
          setPlayer2Time={setPlayer2Time}
          isBack={isBack}
          setIsBack={setIsBack}
        />
        <SWinCondition>
          <Strong>{winCondition}개</Strong>의 연속된 마크가 놓여지면 승리합니다.
        </SWinCondition>
      </LeftBox>
      <RightBox>
        <PlayerBox>
          <PlayerName>
            👤 PLAYER 1 <SMark color={player1MarkColor}>({player1Mark})</SMark>
          </PlayerName>
          <SCountP>
            남은 시간 <Strong>{player1Time}초</Strong>
          </SCountP>
          <SCountP>
            남은 무르기 횟수 : <Strong>{player1BackCount}회</Strong>
          </SCountP>
        </PlayerBox>
        <PlayerBox>
          <PlayerName>
            👤 PLAYER 2 <SMark color={player2MarkColor}>({player2Mark})</SMark>
          </PlayerName>
          <SCountP>
            남은 시간 <Strong>{player2Time}초</Strong>
          </SCountP>
          <SCountP>
            남은 무르기 횟수 : <Strong>{player2BackCount}회</Strong>
          </SCountP>
        </PlayerBox>
        <BtnWrap>
          <SButton onClick={handleBackBtn}>무르기</SButton>
          <HomeBtn to='/'>홈으로 가기</HomeBtn>
        </BtnWrap>
      </RightBox>
    </GamepageContainer>
  )
}

export default GamePage

const GamepageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

const LeftBox = styled.div`
  margin-right: 100px;
`;

const RightBox = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PlayerBox = styled.section`
  width: 400px;
  padding: 20px 30px;
  margin-bottom: 30px;
  background-color: var(--play-box);
  border-radius: 20px;
`;

const STitle = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const SWinCondition = styled.p`
  font-size: 23px;
  text-align: center;
`;

const Strong = styled.strong`
`;

const PlayerName = styled.p`
  margin-bottom: 15px;
  font-size: 35px;
  font-weight: bold;
`;

const SMark = styled.strong`
  color: ${props => props.color};
`;

const SCountP = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

const BtnWrap = styled.div`
  width: 100%;
  margin-top: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SButton = styled.button`
  width: 180px;
  height: 70px;
  border-radius: 10px;
  background-color: var(--light-green);
  font-size: 23px;
  font-weight: bold;

  &:hover {
    background-color: transparent;
    border: 3px solid var(--font-color);
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0;
`;

const HomeBtn = styled(SLink)`
  width: 180px;
  height: 70px;
  display: inline-block;
  padding: 20px 20px;
  border-radius: 10px;
  background-color: var(--light-green);
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  box-sizing: border-box;
  border: 3px solid transparent;

  &:hover {
    background-color: transparent;
    border: 3px solid var(--font-color);
  }
`;
