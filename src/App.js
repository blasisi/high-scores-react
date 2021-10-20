// import logo from './logo.svg';
import "./App.css";
// import react, {useState} from 'react';
import HighScoreTable from "./components/HighScoreTable";
import scores from "./data/scores";
const sortedScores = scores.sort((a, b) => {
  //return value positive
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
});

function App() {
  return (
    <div className="App">
      {sortedScores.map((score) => (
        <HighScoreTable scores={score.scores} name={score.name} />
      ))}
    </div>
  );
}

export default App;
