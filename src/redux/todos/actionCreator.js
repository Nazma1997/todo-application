import { ADDED, TOGGLED, COLORSELECTED, DELETED, ALLCOMPLETED, CLEARCOMPLETED } from "./actionTypes";

// add todo
export const added = (todoText) => {
  return{
    type: ADDED,
    payload: todoText
  }
}
//toggled
export const toggle = (todoId) => {
  return{
    type: TOGGLED,
    payload: todoId
  }
}

// color selected
export const colorSelected = (todoId, color) => {
  return{
    type: COLORSELECTED,
    payload:{
      todoId, color
    }
  }
}
//delete
export const deleted = (todoId) => {
  return{
    type: DELETED,
    payload: todoId
  }
}

//all completed
export const allCompleted = () => {
  return{
    type: ALLCOMPLETED,
   
  }
}

//clear completed
export const clearCompleted = () => {
  return{
    type: CLEARCOMPLETED,
   
  }
}
