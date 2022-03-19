import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';

function App() {
  const [currentAnswer] = useState('TOWER');
  const [currentGuess, setCurrentGuess] = useState([]);
  const [guessIndex, setGuessIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(e) {
      if (
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        e.keyCode === 8 ||
        e.keyCode === 13
      ) {
        handleOnScreenKeyPress(e.key.toUpperCase());
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleOnScreenKeyPress(e) {
    if (guessIndex <= 5) {
      // Backspace
      if (e === 'BACKSPACE') {
        let temp = [...currentGuess];
        temp.pop();
        setCurrentGuess(temp);
      }
      // Enter
      else if (currentGuess.length >= 5 && e === 'ENTER') {
        setGuessIndex(guessIndex + 1);
        setCurrentGuess([]);

        if (currentGuess.join('') === currentAnswer) {
          setGuessIndex(6);
        }
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
      <Keyboard handleOnScreenKeyPress={handleOnScreenKeyPress} />
    </>
  );
}

export default App;
