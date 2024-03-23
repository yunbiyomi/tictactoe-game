import React, { useState } from 'react'
import styled from 'styled-components';

const GameSettingPage = () => {
  const [gameBoardSize, setGameBoardSize] = useState(3); // 게임판 크기
  const [winCondition, setWinCondition] = useState(3); // 승리 조건
  const [player1Mark, setPlayer1Mark] = useState('X'); // 플레이어1 마크 모양
  const [player2Mark, setPlayer2Mark] = useState('O'); // 플레이어2 마크 모양
  const [player1MarkColor, setPlayer1MarkColor] = useState('#0000ff'); // 플레이어1 마크 색상
  const [player2MarkColor, setPlayer2MarkColor] = useState('#ff0000'); // 플레이어2 마크 색상
  const [startPalyer, setStartPlayer] = useState('random'); // 시작 플레이어

  // 게임판 크기 설정 함수
  const handleBoardSize = (size) => {
    setGameBoardSize(size);
  }

  // 승리 조건 설정 함수
  const handleWinCondition = (condition) => {
    setWinCondition(condition);
  }

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
        <SLabel htmlFor='widCondition'>승리 조건</SLabel>
        {Array.from({ length: gameBoardSize - 2 }, (_, index) => index + 3).map(condition => (
          <SButton 
            key={condition} 
            onClick={() => handleWinCondition(condition)}
          >
            {condition}
          </SButton>
        ))}
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player1Mark'>플레이어 1 마크</SLabel>
        <SInput 
          id='player1Mark'
          type='text'
          value={player1Mark}
          onChange={(e) => setPlayer1Mark(e.target.value)}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player1Mark'>플레이어 2 마크</SLabel>
        <SInput 
          id='player2Mark'
          type='text'
          value={player2Mark}
          onChange={(e) => setPlayer2Mark(e.target.value)}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player1MarkColor'>플레이어 1 마크 색상</SLabel>
        <SInput 
          id='player1MarkColor'
          type='color'
          value={player1MarkColor}
          onChange={(e) => setPlayer1MarkColor(e.target.value)}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player2MarkColor'>플레이어 2 마크 색상</SLabel>
        <SInput 
          id='player2MarkColor'
          type='color'
          value={player2MarkColor}
          onChange={(e) => setPlayer2MarkColor(e.target.value)}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='startPlayer'>시작 플레이어</SLabel>
        <SSelect
          id='startPlayer'
          value={startPalyer}
          onChange={(e) => setStartPlayer(e.target.value)}
        >
          <SOption value='player1'>플레이어 1</SOption>
          <SOption value='player2'>플레이어 2</SOption>
          <SOption value='random'>랜덤</SOption>
        </SSelect>
      </SettingWrap>
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