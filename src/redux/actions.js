export const SET_GAME_BOARD_SIZE = 'SET_GAME_BOARD_SIZE';
export const SET_WIN_CONDITION = 'SET_WIN_CONDITION';
export const SET_PLAYER1_MARK = 'SET_PLAYER1_MARK';
export const SET_PLAYER2_MARK = 'SET_PLAYER2_MARK';
export const SET_PLAYER1_MARK_COLOR = 'SET_PLAYER1_MARK_COLOR';
export const SET_PLAYER2_MARK_COLOR = 'SET_PLAYER2_MARK_COLOR';
export const SET_START_PLAYER = 'SET_START_PLAYER';

export const setGameBoardSize = (size) => ({
  type: SET_GAME_BOARD_SIZE,
  payload: size,
})

export const setWinCondition = (condition) => ({
  type: SET_WIN_CONDITION,
  payload: condition,
})

export const setPlayer1Mark = (mark) => ({
  type: SET_PLAYER1_MARK,
  payload: mark,
})

export const setPlayer2Mark = (mark) => ({
  type: SET_PLAYER2_MARK,
  payload: mark,
})

export const setPlayer1MarkColor = (color) => ({
  type: SET_PLAYER1_MARK_COLOR,
  payload: color,
})

export const setPlayer2MarkColor = (color) => ({
  type: SET_PLAYER2_MARK_COLOR,
  payload: color,
})

export const setStartPlayer = (player) => ({
  type: SET_START_PLAYER,
  payload: player,
})