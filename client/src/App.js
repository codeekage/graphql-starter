import React, { Component } from 'react';

//component 
import BookList from './component/BookList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ninja Reading List</h1>
        <BookList/>
      </div>
    );
  }
}

export default App;
