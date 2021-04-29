import { ADD_EMPLOYEE, DELETE_EMPLOYEE, DISPLAY_EMPLOYEE, SINGLE_EMPLOYEE, UPDATE_EMPLOYEE } from '../actionTypes';
import axios from 'axios';

export const addEmployee = (body) => async (dispatch) => {
  var FormData = require('form-data');
  var data = new FormData();
  data.append('name', body.name);
  data.append('email', body.email);
  data.append('role', body.role);
  data.append('department', body.department);
  data.append('salary', body.salary);

  var config = {
    method: 'post',
    url: 'http://localhost:8085/employee/add',
    headers: {
      /* ...data.getHeaders() */
    },
    data: data
  };

  var result = await axios(config)
  dispatch({
    type: ADD_EMPLOYEE,
    payload: result.data
  })
}

export const displayEmployees = () => async (dispatch) => {
  var config = {
    method: 'get',
    url: 'http://localhost:8085/employee/all',
    headers: {}
  };

  var result = await axios(config)
  dispatch({
    type: DISPLAY_EMPLOYEE,
    payload: result.data
  })
}


export const updateEmployee = (body, id) => async (dispatch) => {
  var FormData = require('form-data');
  var data = new FormData();
  data.append('name', body.name);
  data.append('email', body.email);
  data.append('role', body.role);
  data.append('department', body.department);
  data.append('salary', body.salary);

  var config = {
    method: 'put',
    url: `http://localhost:8085/employee/update/${id}`,
    headers: {
      /* ...data.getHeaders() */
    },
    data: data
  };

  var result = await axios(config)
  dispatch({
    type: UPDATE_EMPLOYEE,
    payload: result.data
  })
}

export const singleEmployee = (id) => async (dispatch) => {
  var config = {
    method: 'get',
    url: `http://localhost:8085/employee/details/${id}`,
    headers: {}
  };

  var result = await axios(config)
  dispatch({
    type: SINGLE_EMPLOYEE,
    payload: result.data
  })
}
export const deleteEmployee = (id) => async (dispatch) => {
  var config = {
    method: 'delete',
    url: `http://localhost:8085/employee/delete/${id}`,
    headers: {}
  };

  var result = await axios(config)
  dispatch({
    type: DELETE_EMPLOYEE,
    payload: result.data
  })
}

