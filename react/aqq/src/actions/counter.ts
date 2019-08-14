import {
  ADD,
  MINUS
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD,
    payload: 'add number'
  }
}
export const minus = () => {
  return {
    type: MINUS,
    payload: 'dec number'
  }
}

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}

// 异步减小数值
export function asyncDec() {
  return dispatch => {
    setTimeout(() => {
      dispatch(minus())
    }, 2000);
  }
}
