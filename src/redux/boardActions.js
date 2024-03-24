export const UPDATE_BOARD_HISTORY = 'UPDATE_BOARD_HISTORY';
export const RESET_BOARD = 'RESET_BOARD';

export const updateBoardHistory = (board) => ({
  type: UPDATE_BOARD_HISTORY,
  payload: board,
})

export const resetBoard = () => {
  return {
    type: RESET_BOARD
  }
}