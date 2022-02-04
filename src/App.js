import React, { Component } from 'react'
import Movies from './components/Movies'
import movieData from './moviesData';
import './styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData
    }
  }

  render() {
    return (
      <main>
        <h1 className="App">Rotten Tomatillos</h1>
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
