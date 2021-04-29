import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, DISPLAY_EMPLOYEE, SINGLE_EMPLOYEE } from "../actionTypes"

const initialState = {
  add: null,
  display: null,
  update: null,
  single: null,
  delete: null
}

const employeeReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_EMPLOYEE:
      return { ...state, add: payload }

    case DISPLAY_EMPLOYEE:
      return { ...state, display: payload }

    case UPDATE_EMPLOYEE:
      return { ...state, update: payload }

    case SINGLE_EMPLOYEE:
      return { ...state, single: payload }

    case DELETE_EMPLOYEE:
      return { ...state, delete: payload }

    default:
      return state
  }
}
export default employeeReducer