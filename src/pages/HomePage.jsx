import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <HomePageContainer>
      <STitle>⭕ Tic Tac Toe ❌</STitle>
      <BtnWrap>
        <SButton to="/setting">게임 시작</SButton>
        <SButton to="/record">게임 기록 보기</SButton>
      </BtnWrap>
    </HomePageContainer>
  )
}

export default HomePage

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const STitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 90px;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const BtnWrap = styled.div`
  display: flex;
`;

const SButton = styled(SLink)`
  width: 200px;
  display: inline-block;
  padding: 20px 20px;
  margin: 40px;
  border-radius: 10px;
  background-color: var(--light-green);
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  box-sizing: border-box;
  border: 3px solid transparent;

  &:hover {
    background-color: transparent;
    border: 3px solid var(--font-color);
  }
`;
