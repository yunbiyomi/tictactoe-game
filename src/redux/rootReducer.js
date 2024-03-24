import { combineReducers } from 'redux'
import gameSettingReducer from './gameSetting/gameSettingReducer'
import boardReducer from './board/boardReducer'

const rootReducer = combineReducers({
  gameSettings: gameSettingReducer,
  board: boardReducer
})

export default rootReducer