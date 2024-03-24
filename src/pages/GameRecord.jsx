import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Square from '../components/Square';

const GameRecord = () => {
  const boardHistory = useSelector(state => state.board.boardHistory);
  const [selectedBoard, setSelectedBoard] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  // 버튼 클릭시 해당 진행 횟수에 알맞은 게임 보드 저장
  const handleBoardClick = (board) => {
    setSelectedBoard(board);
    setIsClicked(true);
  };

  return (
    <RecordContainer>
      <STitle>📸 저장된 게임 기록 보기</STitle>
      {boardHistory.length > 0 ? (
        <>
          <BtnWrap>
            {boardHistory.map((board, index) => (
              <div key={index}>
                <SButton onClick={() => handleBoardClick(board)}>
                  <Strong>{index}</Strong>번째 이동
                </SButton>
              </div>
            ))}
          </BtnWrap>
          {isClicked && (
            <BoardContainer>
              {selectedBoard.map((row, rowIndex) => (
                <BoardRow key={rowIndex}>
                  {row.map((cell, colIndex) => (
                      <Square 
                        key={`${rowIndex}-${colIndex}`}
                        value={cell}
                      />
                  ))}
                </BoardRow>
              ))}
            </BoardContainer>
          )}
        </>
      ) : <NoContentMsg>저장된 게임이 없습니다.</NoContentMsg>
    }
      <HomeBtn to='/'>홈으로 돌아가기</HomeBtn>
    </RecordContainer>
  );
}

export default GameRecord;

const RecordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;
`;

const STitle = styled.h2`
  font-size: 40px;
`;

const NoContentMsg = styled.p`
  margin: 150px auto;
  font-size: 25px;
  font-weight: bold;
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border: 5px solid black;
`;

const BoardRow = styled.div`
  display: flex;
`;

const Strong = styled.strong`
`;

const SButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: var(--light-green);
  font-size: 20px;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0;
`;

const HomeBtn = styled(SLink)`
  width: 200px;
  height: 70px;
  display: inline-block;
  margin-top: 50px;
  padding: 20px 20px;
  border-radius: 10px;
  background-color: var(--light-green);
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  box-sizing: border-box;
  border: 3px solid transparent;

  &:hover {
    background-color: transparent;
    border: 3px solid var(--font-color);
  }
`;
