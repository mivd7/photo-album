import * as React from 'react'
import PhotoPage from './photoPage'
import {connect} from 'react-redux'
import { getPhotosByAlbum} from '../actions/photos'

class PhotoPageContainer extends React.PureComponent {
  componentDidMount() {
    const albumId = this.props.match.params.id
    this.props.getPhotosByAlbum(albumId)
  }

  render() {
    if (!this.props.photos) return 'Loading...'
    return <PhotoPage photos={this.props.photos} />
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos
})

export default connect(mapStateToProps, {getPhotosByAlbum})(PhotoPageContainer)
