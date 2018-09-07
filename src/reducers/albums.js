import { ADD_ALBUM, SET_ALBUMS, ALBUM_BY_ID} from '../actions/albums'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_ALBUM:
      return [
        ...state,
        action.payload
      ]
    case SET_ALBUMS:
      return action.payload
    case ALBUM_BY_ID:
      return action.payload.reduce((a, b, c) => ({id: a.id, title: a.title}))
    default:
      return state
  }
}
