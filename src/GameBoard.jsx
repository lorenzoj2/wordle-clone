import React from 'react';
import './GameBoard.css';

function GameBoard(props) {
  if (
    props.currentGuess.length >= 0 &&
    props.guessIndex <= 5 &&
    props.currentGuess.length <= 5
  ) {
    let temp = new Array(5).fill(0);
    props.currentGuess.forEach((value, index) => (temp[index] = value));
    props.guesses[props.guessIndex] = temp;
  }

  function getTileClass(tile, index, row_index) {
    if (row_index < props.guessIndex) {
      if (props.guessResults[row_index][index] === 2) {
        return 'game-tile filled correct';
      } else if (props.guessResults[row_index][index] === 1) {
        return 'game-tile filled in-word';
      } else if (props.guessResults[row_index][index] === 0) {
        return 'game-tile filled not-in-word';
      }
    } else {
      return 'game-tile filled';
    }
  }

  const duration = 700;
  const delay = 500;

  function getAnim(index, row_index, tile) {
    if ((row_index < props.guessIndex) & (tile !== 0)) {
      return `flip-tile ${duration}ms ${delay * index}ms forwards`;
    }
  }

  return (
    <div className="game-board">
      {props.guesses.map((guess, row_index) => (
        <div key={row_index} className="game-row">
          {guess.map((tile, index) => (
            <section
              key={index}
              className={
                tile === 0 ? 'game-tile' : getTileClass(tile, index, row_index)
              }
              style={{ animation: getAnim(index, row_index, tile) }}
            >
              {tile === 0 ? '' : tile}
            </section>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
