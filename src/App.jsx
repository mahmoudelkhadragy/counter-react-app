import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
class App extends Component {
  render() {
    return (
      <main className="container" >
        <h1> Hello </h1>
        <Movies />
      </main>
    );
  }
}

export default App;