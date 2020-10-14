import React from 'react';
import Board from "./Board"
import { calculateWinner } from "../utils/calculateWinner"
import PlayerInput from './PlayerInput';

export default function Game(props) {
  const [stepNumber, setStepNumber] = React.useState(0);
  const [xIsNext, setXIsNext] = React.useState(true);
  const [history, setHistory] = React.useState([
    {
      squares: Array(9).fill(null)
    }
  ]);

  const [playerName1, setPlayerName1] = React.useState("Player 1");
  const [playerName2, setPlayerName2] = React.useState("Player 2");
  const handleChange1 = event => {
    setPlayerName1(event.target.value);
  };
  const handleChange2 = event => {
    setPlayerName2(event.target.value);
  };

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    console.log(history)
    console.log(newHistory)

    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(newHistory.concat([
      {
        squares: squares
      }
    ]))

    setStepNumber(newHistory.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }



  const current2 = history[stepNumber];
  const winner = calculateWinner(current2.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? playerName1 : playerName2);
  }

  return (
    <div>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current2.squares}
            onClick={i => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
      <PlayerInput
        handleChange1={handleChange1}
        handleChange2={handleChange2}
      />
    </div>
  );
}