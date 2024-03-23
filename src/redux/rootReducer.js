import { combineReducers } from 'redux'
import gameSettingReducer from './gameSettingReducer'

const rootReducer = combineReducers({
  gameSettings: gameSettingReducer
})

export default rootReducer