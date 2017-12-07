import { combineReducers } from 'redux'
import { RECEIVE_MENU } from '../actions'

export const menu = (state = {path: [], children: [], type: [], competition_id: []}, action) => {
  switch (action.type) {
    case RECEIVE_MENU:
      return action.json
    default:
      return state
  }
}

