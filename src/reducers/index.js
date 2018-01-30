import { combineReducers } from 'redux'
import anotherReducer from './anotherReducer'
import counter from './counter'

const rootReducer = combineReducers({
  anotherReducer,
  counter
})

export default counter
