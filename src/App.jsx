import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';

function App() {
  const [currentGuess, setCurrentGuess] = useState([]);

  function updateGuess(e) {
    if (e === 'DEL') {
      let temp = [...currentGuess];
      temp.pop();
      setCurrentGuess(temp);
    } else if (currentGuess.length <= 4) {
      setCurrentGuess((currentGuess) => [...currentGuess, e]);
    }
  }

  console.log(currentGuess);

  return (
    <>
      <Header />
      <GameBoard />
      <Keyboard updateGuess={updateGuess} />
    </>
  );
}

export default App;
