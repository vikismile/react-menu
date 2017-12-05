export const RECEIVE_MENU = 'RECEIVE_MENU'

const receiveMenu = (json) => ({
  type: RECEIVE_MENU,
  json
})

export const fetchPosts = id => dispatch => {
  return fetch('https://dev.bfgw.bettings.ch/api/navigation/'+id+'?account_id=bHi9lzgei')
    .then(response => response.json())
    .then(json => dispatch(receiveMenu(json)))
}
