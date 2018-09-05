import * as request from 'superagent'

export const ADD_ALBUM = 'ADD_ALBUM'
export const SET_ALBUMS = 'SET_ALBUMS'

export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  }
}

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: albums
  }
}

//redux-thunk: a function with no arguments that returns a function taking dispatch as argument, requesting
//DATA from api and then dispatch it in the response the setAlbums action.
//'always use redux-thunk when making api calls' used for big scalable apps
export function getAlbums() {
  return function (dispatch) {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        dispatch(setAlbums(response.body))
      })
  }
}
