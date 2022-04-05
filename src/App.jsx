import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';

import words from './words.json';

function App() {
  const [currentAnswer] = useState('TOWER');
  const [currentGuess, setCurrentGuess] = useState([]);
  const [guessIndex, setGuessIndex] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  // Record which keys were pressed
  const [keysPressed] = useState([[], [], []]);

  // Game board
  const [guesses] = useState(new Array(6).fill(0).map(() => new Array(5).fill(0)));

  // Game board results , 2 = correct, 1 = in-word, and 0 = not in-word
  const [guessResults] = useState(new Array(6).fill(0).map(() => new Array(5).fill(0)));

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 8 || e.keyCode === 13) {
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
      else if (currentGuess.length === 5 && e === 'ENTER') {
        var filteredWords = words[currentGuess[0]];
        // Check word list for valid word
        if (filteredWords.includes(currentGuess.join(''))) {
          setGuessIndex(guessIndex + 1);

          var tempAnswer = currentAnswer.split('');

          // Check guess for correct letter placement
          for (let i = 0; i <= 4; i++) {
            if (currentGuess[i] === tempAnswer[i]) {
              guessResults[guessIndex][i] = 2;
              tempAnswer[tempAnswer.indexOf(currentGuess[i])] = '';
              keysPressed[0].push(currentGuess[i]);
            }
          }

          // Check guess for letters in answer
          for (let j = 0; j <= 4; j++) {
            if (guessResults[guessIndex][j] !== 2 && tempAnswer.includes(currentGuess[j])) {
              guessResults[guessIndex][j] = 1;
              tempAnswer[tempAnswer.indexOf(currentGuess[j])] = '';
              keysPressed[1].push(currentGuess[j]);
            } else {
              keysPressed[2].push(currentGuess[j]);
            }
          }

          if (currentGuess.join('') === currentAnswer) {
            setCurrentGuess([]);
            setHasWon(true);
          }

          setCurrentGuess([]);
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
        guesses={guesses}
        guessResults={guessResults}
        currentGuess={currentGuess}
        guessIndex={guessIndex}
        hasWon={hasWon}
      />

      <Keyboard handleOnScreenKeyPress={handleOnScreenKeyPress} keysPressed={keysPressed} />
    </>
  );
}

export default App;
