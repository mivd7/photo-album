import * as React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import AlbumsList from './albumsList'
import { setAlbums } from '../actions/albums'

class AlbumsListContainer extends React.PureComponent {
  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.props.setAlbums(response.body))
  }

  render() {
    console.log(this.props.albums)
    if (!this.props.albums) return 'Loading...'
    return (<div>
      <AlbumsList albums={this.props.albums} />
    </div>)
  }
}

const mapStateToProps = function (state) {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, { setAlbums })(AlbumsListContainer)
