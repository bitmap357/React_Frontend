import logo from './logo.svg';
import './App.css';
import R

const movies = [
  [
    {"name":"Movie 1","description":"This is a new movie","rating":4.8,"image":"http://127.0.0.1:8000/media/Images/None/sampleImg.jpg"},
    {"name":"Movie 2","description":"This is movie 2","rating":5.0,"image":"http://127.0.0.1:8000/media/Images/None/sampleImg.jpg"},
    {"name":"The beast","description":"One best movie","rating":3.5,"image":"http://127.0.0.1:8000/media/Images/None/sampleImg.jpg"},
    {"name":"Flask","description":"This is movie 2","rating":4.0,"image":"http://127.0.0.1:8000/media/Images/androidlock2.png"}
]
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
