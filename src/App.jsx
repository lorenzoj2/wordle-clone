import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';

function App() {
  const [currentAnswer, setCurrentAnswer] = useState('POWER');
  const [currentGuess, setCurrentGuess] = useState([]);
  const [guessIndex, setGuessIndex] = useState(0);

  function handleKeyPress(e) {
    if (guessIndex <= 5) {
      // DEL
      if (e === 'DEL') {
        let temp = [...currentGuess];
        temp.pop();
        setCurrentGuess(temp);
      }
      // Enter
      else if (currentGuess.length >= 5 && e === 'ENTER') {
        setGuessIndex(guessIndex + 1);
        setCurrentGuess([]);
      }
      // All other keys
      else if (currentGuess.length <= 4 && e !== 'ENTER') {
        setCurrentGuess((currentGuess) => [...currentGuess, e]);
      }
    }
  }

  return (
    <>
      <Header />
      <GameBoard
        currentAnswer={currentAnswer}
        currentGuess={currentGuess}
        guessIndex={guessIndex}
      />
      <Keyboard handleKeyPress={handleKeyPress} />
    </>
  );
}

export default App;
