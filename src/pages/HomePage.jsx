import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <>
      <STitle>Tic Tac Toe</STitle>
      <SButton to="/setting">게임 시작</SButton>
      <SButton to="/record">저장된 게임</SButton>
    </>
  )
}

export default HomePage

const STitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
`;
const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SButton = styled(SLink)`
  display: inline-block;
  border: 1px solid black;
  font-size: 20px;
  padding: 10px 20px;
  margin: 10px;
`;
