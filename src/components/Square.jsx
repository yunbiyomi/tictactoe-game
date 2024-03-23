import React from 'react'
import styled from 'styled-components'

const Square = ({ value }) => {
  return (
    <SquareBox>
      {value}
    </SquareBox>
  )
}

export default Square

const SquareBox = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid black;
  cursor: pointer;
`;