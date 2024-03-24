import { RESET_GAME_SETTINGS, SET_GAME_BOARD_SIZE, SET_PLAYER1_MARK, SET_PLAYER1_MARK_COLOR, SET_PLAYER2_MARK, SET_PLAYER2_MARK_COLOR, SET_START_PLAYER, SET_WIN_CONDITION } from "./gameSettingActions";

const initialState = {
  gameBoardSize: 3,
  winCondition: 3,
  player1Mark: 'X',
  player2Mark: 'O',
  player1MarkColor: '#0000ff',
  player2MarkColor: '#ff0000',
  startPlayer: 'random',
}

const gameSettingReducer = (state= initialState, action) => {
  switch(action.type) {
    case RESET_GAME_SETTINGS:
      return initialState;
    case SET_GAME_BOARD_SIZE:
      return {
        ...state,
        gameBoardSize: action.payload,
      };
    case SET_WIN_CONDITION:
      return {
        ...state,
        winCondition: action.payload,
      };
    case SET_PLAYER1_MARK:
      return {
        ...state,
        player1Mark: action.payload,
      };
    case SET_PLAYER2_MARK:
      return {
        ...state,
        player2Mark: action.payload,
      }
    case SET_PLAYER1_MARK_COLOR:
      return {
        ...state,
        player1MarkColor: action.payload,
      }
    case SET_PLAYER2_MARK_COLOR:
      return {
        ...state,
        player2MarkColor: action.payload
      }
    case SET_START_PLAYER:
      return {
        ...state,
        startPlayer: action.payload
      }
    default:
      return state;
  }
}

export default gameSettingReducer