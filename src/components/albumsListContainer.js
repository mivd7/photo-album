
import * as React from 'react'
import AlbumsList from './albumsList'
import { connect } from 'react-redux'
import { setAlbums } from '../actions/albums'
// import AddAlbumForm from './AddAlbumForm'

const sleep = time => new Promise(
  resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

class AlbumsListContainer extends React.PureComponent {
  componentDidMount() {
    sleep(2000)
      .then(message => this.props.setAlbums([
        {
          id: 1,
          title: message
        },
        {
          id: 2,
          title: 'This is the second album'
        },
        {
          id: 3,
          title: 'The last album'
        }
      ]))
  }

  render() {
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
