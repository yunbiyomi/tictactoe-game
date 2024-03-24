import { combineReducers } from 'redux'
import gameSettingReducer from './gameSettingReducer'
import boardReducer from './boardReducer'

const rootReducer = combineReducers({
  gameSettings: gameSettingReducer,
  board: boardReducer
})

export default rootReducer