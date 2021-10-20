// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
// import react, {useState} from 'react';
// import EachCountryHighScore from './data/scores';
import HighScoreTable from "./components/HighScoreTable"

function App() {
  return (
    <div className="App">
    <HighScoreTable />
    <Header />
    </div>
  );
  }

export default App;
