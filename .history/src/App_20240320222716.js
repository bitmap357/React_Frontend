// import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios"


class App extends React.Component {

  state = {
    movies: [],
  };
  componentDidMount() {
    this.getMovies(    )
  }
  render(){
    return (
      <div className="App">
        {this.state.movies.map((movie)=>(
          <div key={movie.id}>
            <img scr={movie.image}></img>
            <h1>{movie.name}</h1>
            <h2>{movie.description}</h2>
            <h3>{movie.rating}</h3>
          </div>
        ))}
      </div>
    );
    }
  
}

export default App;