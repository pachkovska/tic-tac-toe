import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from "./Header";
import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";

function App() {
  return (
    <div className="App">
        <div className={"app-container"}>
            <Header />
            <div className={"boards-container"}>
                <GameBoard />
                <ScoreBoard />
            </div>
        </div>
    </div>
  );
}

export default App;
