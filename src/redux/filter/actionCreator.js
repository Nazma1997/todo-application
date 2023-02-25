import { COLORCHANGE, STATUSCHANGE } from "./actionTypes";

// color change
export const colorChange = (color, changeTypes) => {
  return{
    type: COLORCHANGE,
    payload: {color, changeTypes}
  }
}

// status change

export const statusChange = (status) => {
  return{
    type: STATUSCHANGE,
    payload: status
  }
}