import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';

function App() {
  const [currentAnswer, setCurrentAnswer] = useState('TOWER');
  const [currentGuess, setCurrentGuess] = useState([]);
  const [guessIndex, setGuessIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const [guesses] = useState(
    new Array(6).fill(0).map(() => new Array(5).fill(0))
  );

  const [guessResults] = useState(
    new Array(6).fill(0).map(() => new Array(5).fill(0))
  );

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
      else if (currentGuess.length === 5 && e === 'ENTER') {
        setLoading(true);

        var tempAnswer = currentAnswer.split('');

        // Check guess for correct letter placement
        for (let i = 0; i <= 4; i++) {
          if (currentGuess[i] === tempAnswer[i]) {
            guessResults[guessIndex][i] = 2;
            tempAnswer[tempAnswer.indexOf(currentGuess[i])] = '';
          }
        }

        // Check guess for letters in answer
        for (let j = 0; j <= 4; j++) {
          if (
            guessResults[guessIndex][j] !== 2 &&
            tempAnswer.includes(currentGuess[j])
          ) {
            guessResults[guessIndex][j] = 1;
            tempAnswer[tempAnswer.indexOf(currentGuess[j])] = '';
          }
        }

        setCurrentGuess([]);
        setGuessIndex(guessIndex + 1);

        if (currentGuess.join('') === currentAnswer) {
          setGuessIndex(6);
        }

        setLoading(false);
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

      {!loading && (
        <GameBoard
          guesses={guesses}
          guessResults={guessResults}
          currentAnswer={currentAnswer}
          currentGuess={currentGuess}
          guessIndex={guessIndex}
          loading={loading}
        />
      )}

      <Keyboard
        currentAnswer={currentAnswer}
        handleOnScreenKeyPress={handleOnScreenKeyPress}
      />
    </>
  );
}

export default App;
