import { combineReducers } from 'redux'
import { RECEIVE_EVENTS } from '../actions'

export const events = (state = [{event: [], name: [], id: []}], action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.json
    default:
      return state
  }
}

