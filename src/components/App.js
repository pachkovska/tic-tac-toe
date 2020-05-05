import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Header from "./Header";
import GameBoard from "./GameBoard";

function App() {
  return (
    <div className="App">
        <div className={"app-container"}>
            <Header />
            <GameBoard />
        </div>
    </div>
  );
}

export default App;
