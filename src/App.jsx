import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';

function App() {
  const [currentGuess, setCurrentGuess] = useState([]);

  function handleKeyPress(e) {
    if (e === 'DEL') {
      let temp = [...currentGuess];
      temp.pop();
      setCurrentGuess(temp);
    } else if (currentGuess.length <= 4) {
      setCurrentGuess((currentGuess) => [...currentGuess, e]);
    }
  }

  return (
    <>
      <Header />
      <GameBoard currentGuess={currentGuess} />
      <Keyboard handleKeyPress={handleKeyPress} />
    </>
  );
}

export default App;
