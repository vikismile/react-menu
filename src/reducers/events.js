import { combineReducers } from 'redux'
import { RECEIVE_EVENTS } from '../actions/index1'

export const events = (state = [{events: [], event: [], name: [], id: []}], action)=> {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.json
    default:
      return state
  }
}

