import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { resetGameSettings, setGameBoardSize, setPlayer1Mark, setPlayer1MarkColor, setPlayer2Mark, setPlayer2MarkColor, setStartPlayer, setWinCondition } from '../redux/actions';

const GameSettingPage = () => {
  const dispatch = useDispatch();
  const gameBoardSize = useSelector(state => state.gameSettings.gameBoardSize); // 게임판 크기
  const winCondition = useSelector(state => state.gameSettings.winCondition); // 승리 조건
  const player1Mark = useSelector(state => state.gameSettings.player1Mark); // 플레이어1 마크 모양
  const player2Mark = useSelector(state => state.gameSettings.player2Mark); // 플레이어2 마크 모양
  const player1MarkColor = useSelector(state => state.gameSettings.player1MarkColor); // 플레이어 1 마크 색상
  const player2MarkColor = useSelector(state => state.gameSettings.player2MarkColor); // 플레이어 2 마크 색상
  const startPlayer = useSelector(state => state.gameSettings.startPlayer); // 시작 플레이어

  // 게임판 크기 설정 함수
  const handleBoardSize = (size) => {
    dispatch(setGameBoardSize(size));
  }

  // 승리 조건 설정 함수
  const handleWinCondition = (condition) => {
    dispatch(setWinCondition(condition));
  }

  // 게임 설정시 초기 기본값으로 초기화
  useEffect(() => {
    dispatch(resetGameSettings());
  }, []);

  return (
    <SettingContainer>
      <STitle>게임 설정</STitle>
      <SettingWrap>
        <SLabel htmlFor='boardSize'>게임판 크기</SLabel>
        <BtnWrap>
          <SButton onClick={() => handleBoardSize(3)}>3 X 3</SButton>
          <SButton onClick={() => handleBoardSize(4)}>4 X 4</SButton>
          <SButton onClick={() => handleBoardSize(5)}>5 X 5</SButton>
        </BtnWrap>
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='winCondition'>승리 조건</SLabel>
        <SSelect
          id='winCondition'
          value={winCondition}
          onChange={(e)=>dispatch(setWinCondition(e.target.value))}
        >
          {Array.from({ length: gameBoardSize - 2 }, (_, index) => index + 3).map(condition => (
            <SOption 
              key={condition} 
              value={condition}
            >
              {condition}
            </SOption>
          ))}
        </SSelect>
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player1Mark'>플레이어 1 마크</SLabel>
        <SInput 
          id='player1Mark'
          type='text'
          value={player1Mark}
          onChange={(e) => dispatch(setPlayer1Mark(e.target.value))}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player1Mark'>플레이어 2 마크</SLabel>
        <SInput 
          id='player2Mark'
          type='text'
          value={player2Mark}
          onChange={(e) => dispatch(setPlayer2Mark(e.target.value))}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player1MarkColor'>플레이어 1 마크 색상</SLabel>
        <SInput 
          id='player1MarkColor'
          type='color'
          value={player1MarkColor}
          onChange={(e) => dispatch(setPlayer1MarkColor(e.target.value))}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player2MarkColor'>플레이어 2 마크 색상</SLabel>
        <SInput 
          id='player2MarkColor'
          type='color'
          value={player2MarkColor}
          onChange={(e) => dispatch(setPlayer2MarkColor(e.target.value))}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='startPlayer'>시작 플레이어</SLabel>
        <SSelect
          id='startPlayer'
          value={startPlayer}
          onChange={(e) => dispatch(setStartPlayer(e.target.value))}
        >
          <SOption value='player1'>플레이어 1</SOption>
          <SOption value='player2'>플레이어 2</SOption>
          <SOption value='random'>랜덤</SOption>
        </SSelect>
      </SettingWrap>
      <SLink to='/game'>게임하러가기</SLink>
    </SettingContainer>
  )
}

export default GameSettingPage

const SettingContainer = styled.section`
`;

const STitle = styled.h2`
`;

const SettingWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SLabel = styled.label``;

const BtnWrap = styled.div``;

const SButton = styled.button`
`;

const SInput = styled.input``;

const SSelect = styled.select`
`;

const SOption = styled.option``;

const SLink = styled(Link)``;