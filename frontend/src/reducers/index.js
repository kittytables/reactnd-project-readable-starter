import {
  ADD_POST,
} from '../actions'
import { combineReducers } from 'redux'

const initialState = {
  posts: {
    title: '',
    body: ''
  },
}

function posts (state = initialState, action) {
  const { title , body } = action

  switch(action.type) {
    case ADD_POST: return {
      ...state,
      title: title,
      body: body
    }
    default: return state
  }
}

export default posts
