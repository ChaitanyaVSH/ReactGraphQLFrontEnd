import React, { Component } from 'react';
import "./App.css";


//Components
import BookList from './components/BookList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Chaitu's Reading list</h1>
        <BookList/>
      </div>
    )
  }
}
