import React, { Component } from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux'
import AlbumsListContainer from './components/albumsListContainer'
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
            <AlbumsListContainer />
          </div>
        </Provider>
      );
    }
}

export default App;
