import logo from './logo.svg';
import './App.css';
import React from "react";

const movies = [
  [
    {"name":"Movie 1","description":"This is a new movie","rating":4.8,"image":"http://127.0.0.1:8000/media/Images/None/sampleImg.jpg"},
    {"name":"Movie 2","description":"This is movie 2","rating":5.0,"image":"http://127.0.0.1:8000/media/Images/None/sampleImg.jpg"},
    {"name":"The beast","description":"One best movie","rating":3.5,"image":"http://127.0.0.1:8000/media/Images/None/sampleImg.jpg"},
    {"name":"Flask","description":"This is movie 2","rating":4.0,"image":"http://127.0.0.1:8000/media/Images/androidlock2.png"}
]
];

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {movies};
  }
  render(){
    return (
      <div className="App">
        {this.state.movies.map((movie)=>(
          <div></div>
        ))}
      </div>
    );
    }
  
}

export default App;
