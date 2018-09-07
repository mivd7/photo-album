import * as React from 'react'
import PhotoPage from './photoPage'
import {connect} from 'react-redux'
import { getPhotosByAlbum} from '../actions/photos'
import {getAlbums} from '../actions/albums'

class PhotoPageContainer extends React.PureComponent {
  componentDidMount() {
    const albumId = this.props.match.params.id
    this.props.getPhotosByAlbum(albumId)
    this.props.getAlbums()
  }

  render() {
    const albums = this.props.albums
    const albumId = this.props.match.params.id
    const findAlbum = (id) => albums.find(where('id', equals(id)))
    console.log(findTitle(albumId))
    function getTitleById(id) {
            var i;
            for (i = 0; i < albums.length; i++) {
                if(albums[i]['id'] == id)
                return albums[i]['title']
            }}

    const getTitle = getTitleById(this.props.match.params.id)
    console.log(getTitle)
    if (!this.props.photos) return 'Loading...'
    return (
      <div>
      <div className="header">
      <h1>{getTitle}</h1>
      </div>
      <div className="photos">
    <PhotoPage photos={this.props.photos} />
  </div>
</div>)
}}

const mapStateToProps = (state) => ({
  photos: state.photos,
  albums: state.albums
})

export default connect(mapStateToProps, {getPhotosByAlbum, getAlbums})(PhotoPageContainer)
