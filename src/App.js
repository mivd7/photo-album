import React, { Component } from 'react';
import logo from './logo.svg';
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import AlbumsListContainer from './components/albumsListContainer'
import PhotoPageContainer from './components/photoPageContainer'
import store from './store'
import './App.css';

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Route exact path="/" component={AlbumsListContainer} />
            <Route exact path="/albums/:id" component={PhotoPageContainer} />
          </div>
        </Provider>
      );
    }
}

export default App;
