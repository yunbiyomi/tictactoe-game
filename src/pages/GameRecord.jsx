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
      {boardHistory.length > 0 && (
        <>
          {boardHistory.map((board, index) => (
            <div key={index}>
              <button onClick={() => handleBoardClick(board)}>
                {index}
              </button>
            </div>
          ))}
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
      )}
      <SLInk to='/'>홈으로 돌아가기</SLInk>
    </RecordContainer>
  );
}

export default GameRecord;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SLInk = styled(Link)`

`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid black;
`;

const BoardRow = styled.div`
  display: flex;
`;
