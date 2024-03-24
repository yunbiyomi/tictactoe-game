import { RESET_BOARD, UPDATE_BOARD_HISTORY } from "./boardActions"

const initialState = {
  boardHistory: '',
}

const boardReducer = (state = initialState, action) => {
  switch(action.type) {
    case RESET_BOARD:
      return initialState;
    case UPDATE_BOARD_HISTORY:
      return {
        ...state,
        boardHistory: action.payload,
      };
    default:
      return state;
  }
}

export default boardReducer