export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

const receiveEvents = (json) => ({
  type: RECEIVE_EVENTS,
  json
})

export const fetchPosts = id => dispatch => {
  return fetch('https://dev.bfgw.bettings.ch/api/events?account_id=bHi9lzgei&competition_ids='+id)
    .then(response => response.json())
    .then(json => dispatch(receiveEvents(json)))
}
