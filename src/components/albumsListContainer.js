import * as React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import AlbumsList from './albumsList'
import AddAlbumForm from './AddAlbumForm'
import { getAlbums } from '../actions/albums'
import { createAlbum } from '../actions/albums'

class AlbumsListContainer extends React.PureComponent {
  componentDidMount() {
    if (!this.props.albums.length) this.props.getAlbums()
  }

  render() {
    console.log(this.props.albums)
    if (!this.props.albums) return 'Loading...'
    return (<div>
      <AlbumsList albums={this.props.albums} />
      <AddAlbumForm createAlbum={this.props.createAlbum} />
    </div>)
  }
}

const mapStateToProps = function (state) {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, { getAlbums, createAlbum })(AlbumsListContainer)
