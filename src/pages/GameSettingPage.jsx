import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { resetGameSettings, setGameBoardSize, setPlayer1Mark, setPlayer1MarkColor, setPlayer2Mark, setPlayer2MarkColor, setStartPlayer, setWinCondition } from '../redux/gameSetting/gameSettingActions';
import { resetBoard } from '../redux/board/boardActions';

const GameSettingPage = () => {
  const dispatch = useDispatch();
  const gameBoardSize = useSelector(state => state.gameSettings.gameBoardSize); // 게임판 크기
  const winCondition = useSelector(state => state.gameSettings.winCondition); // 승리 조건
  const player1Mark = useSelector(state => state.gameSettings.player1Mark); // 플레이어1 마크 모양
  const player2Mark = useSelector(state => state.gameSettings.player2Mark); // 플레이어2 마크 모양
  const player1MarkColor = useSelector(state => state.gameSettings.player1MarkColor); // 플레이어 1 마크 색상
  const player2MarkColor = useSelector(state => state.gameSettings.player2MarkColor); // 플레이어 2 마크 색상
  const startPlayer = useSelector(state => state.gameSettings.startPlayer); // 시작 플레이어
  const [selectedSize, setSelectedSize] = useState(3); // 선택된 게임판 크기

  // 게임판 크기 설정 함수
  const handleBoardSize = (size) => {
    dispatch(setGameBoardSize(size));
    setSelectedSize(size);
  }

  // 게임 설정시 초기 기본값으로 초기화
  useEffect(() => {
    dispatch(resetGameSettings());
    dispatch(resetBoard());
  }, []);

  return (
    <SettingContainer>
      <STitle>⚙️ 게임 설정 ⚙️</STitle>
      <SettingWrap>
        <SLabel htmlFor='boardSize'>게임판 크기</SLabel>
        <BtnWrap>
          <SButton 
            onClick={() => handleBoardSize(3)}
            selected={selectedSize === 3}
          >
            3 X 3
          </SButton>
          <SButton 
            onClick={() => handleBoardSize(4)}
            selected={selectedSize === 4}
          >
            4 X 4
          </SButton>
          <SButton 
            onClick={() => handleBoardSize(5)}
            selected={selectedSize === 5}
          >
            5 X 5
          </SButton>
        </BtnWrap>
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='winCondition'>승리 조건 (연속 마크 개수)</SLabel>
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
        <SLabel htmlFor='player1Mark'>Player 1 마크</SLabel>
        <SInput 
          id='player1Mark'
          type='text'
          value={player1Mark}
          onChange={(e) => dispatch(setPlayer1Mark(e.target.value))}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player1MarkColor'>Player 1 마크 색상</SLabel>
        <ColorInput
          id='player1MarkColor'
          type='color'
          value={player1MarkColor}
          onChange={(e) => dispatch(setPlayer1MarkColor(e.target.value))}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player1Mark'>Player 2 마크</SLabel>
        <SInput 
          id='player2Mark'
          type='text'
          value={player2Mark}
          onChange={(e) => dispatch(setPlayer2Mark(e.target.value))}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='player2MarkColor'>Player 2 마크 색상</SLabel>
        <ColorInput
          id='player2MarkColor'
          type='color'
          value={player2MarkColor}
          onChange={(e) => dispatch(setPlayer2MarkColor(e.target.value))}
        />
      </SettingWrap>
      <SettingWrap>
        <SLabel htmlFor='startPlayer'>시작 Player</SLabel>
        <SSelect
          id='startPlayer'
          value={startPlayer}
          onChange={(e) => dispatch(setStartPlayer(e.target.value))}
        >
          <SOption value='player1'>Player 1</SOption>
          <SOption value='player2'>Player 2</SOption>
          <SOption value='random'>랜덤</SOption>
        </SSelect>
      </SettingWrap>
      <BtnWrap>
        <SLinkBtn to='/game'>게임 시작</SLinkBtn>
        <SLinkBtn to='/'>홈으로 가기</SLinkBtn>
      </BtnWrap>
    </SettingContainer>
  )
}

export default GameSettingPage

const SettingContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

const STitle = styled.h2`
  margin-top: 50px;
  font-size: 50px;
  text-align: center;
`;

const SettingWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const SLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SButton = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border: 2px solid var(--font-color);
  background-color: ${({ selected }) => (selected ? 'var(--light-green)' : 'transparent')};
  border-radius: 10px;
  font-size: 20px;

  &:last-child {
    margin: 0;
  }
`;

const SInput = styled.input`
  height: 50px;
  padding: 0 15px;
  border: 2px solid var(--font-color);
  border-radius: 10px;
  background-color: transparent;
  font-size: 20px;
`;

const ColorInput = styled(SInput)`
  width: 100%;
  padding: 2px 5px;
`;

const SSelect = styled.select`
  height: 50px;
  padding: 0 15px;
  border: 2px solid var(--font-color);
  border-radius: 10px;
  background-color: transparent;
  font-size: 20px;
`;

const SOption = styled.option`
  background-color: var(--background-color);
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SLinkBtn = styled(SLink)`
  width: 150px;
  display: inline-block;
  padding: 10px 10px;
  margin-right:30px;
  border-radius: 10px;
  background-color: var(--light-green);
  text-align: center;
  font-size: 21px;
  font-weight: bold;
  box-sizing: border-box;
  border: 3px solid transparent;

  &:hover {
    background-color: transparent;
    border: 3px solid var(--font-color);
  }

  &:last-child {
    margin: 0;
  }
`;
