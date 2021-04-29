import { combineReducers } from 'redux'
import employeeReducer from './reducers/employeeReducer'

const rootReducer = combineReducers({
  empState: employeeReducer
})
export default rootReducer