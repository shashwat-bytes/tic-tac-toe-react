/*import { useState } from "react";
import Card from "../card/Card";
import './Grid.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function isWinner(board, symbol) {
    console.log(board, symbol);
    if(board[0] == board[1] && board[1]== board[2] && board[2] == symbol) return symbol;       // checking rows
     if(board[3] == board[4] && board[4] == board[5] && board[5] == symbol) return symbol;
      if(board[6] == board[7] && board[7] == board[8] && board[8] == symbol) return symbol;

       if(board[0] == board[3] && board[3] == board[6] && board[6] == symbol) return symbol;  // checking columns
        if(board[1] == board[4] && board[4] == board[7] && board[7] == symbol) return symbol;
         if(board[2] == board[5] && board[5] == board[8] && board[8] == symbol) return symbol;

            if(board[0] == board[4] && board[4] == board[8] && board[8] == symbol) return symbol;  // checking diagonals
                if(board[2] == board[4] && board[4] == board[6] && board[6] == symbol) return symbol;

                return "";
}

function Grid({numberOfCards}) {
    const [turn, setTurn] = useState(true); // fasle for X and true for O
    const[board,setBoard] = useState(Array(numberOfCards).fill("")); // to keep track of the board state ["","", "", "", "", "", "", "", ""]
    const [winner, setWinner] = useState(null);


function play(index) {
    console.log('move played' + index);
    if (turn === true) {
        board[index] = 'O'; 
    } else {    
        board[index] = 'X';
    }
    const win = isWinner(board, turn ? "O" : "X");
    console.log("winner is " + win);

    if (win) {
        setWinner(win);
       // alert(`Player ${win} has won the game!`);
       toast.success(`Player ${win} has won the game!`)
    }

    setBoard([...board]);
    setTurn(!turn);
}

function reset() {  
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
    setTurn(true);
}
    return (
       <div className = "grid-wrapper">
            {winner && (
                <>
                    <h1 className = "turn-highlight"> Winner is {winner} </h1>
                    <button className= "reset" onClick = {reset}> Reset Game </button>
                    <ToastContainer />
                </>
            )}
            <h1 className="turn-highlight">Current Turn: {(turn) ? 'O' : 'X'} </h1>
            <div className="grid">
            {board.map((value, idx) => {
                return <Card onPlay = {play} player ={value} key = {idx} index = {idx} />
            })}
            </div>
       </div>
    )


}

export default Grid;

*/
import { useState } from "react";
import Card from "../card/Card";
import "./Grid.css";
import { SiNuke } from "react-icons/si"; // optional – remove if unused
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function isWinner(board, symbol) {
  if (board[0] === symbol && board[1] === symbol && board[2] === symbol) return symbol;
  if (board[3] === symbol && board[4] === symbol && board[5] === symbol) return symbol;
  if (board[6] === symbol && board[7] === symbol && board[8] === symbol) return symbol;

  if (board[0] === symbol && board[3] === symbol && board[6] === symbol) return symbol;
  if (board[1] === symbol && board[4] === symbol && board[7] === symbol) return symbol;
  if (board[2] === symbol && board[5] === symbol && board[8] === symbol) return symbol;

  if (board[0] === symbol && board[4] === symbol && board[8] === symbol) return symbol;
  if (board[2] === symbol && board[4] === symbol && board[6] === symbol) return symbol;

  return "";
}

function Grid({ numberOfCards }) {
  const [turn, setTurn] = useState(true); // true for O, false for X
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (board[index] !== "" || winner) return; // prevent overwriting and moves after win

    const newBoard = [...board];
    const currentSymbol = turn ? "O" : "X";
    newBoard[index] = currentSymbol;

    const win = isWinner(newBoard, currentSymbol);
    if (win) {
      setWinner(win);
      toast(`Congratulations! Player ${win} has won the game!`);
    }

    setBoard(newBoard);
    setTurn(!turn);
  }

  function reset() {
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
    setTurn(true);
  }

  return (
    <div className="grid-wrapper">
      {/* Toast container should be rendered once */}
      <ToastContainer />

      {winner && (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>
          <button className="reset" onClick={reset}>
            Reset Game
          </button>
        </>
      )}

      <h1 className="turn-highlight">
        Current Turn: {turn ? "O" : "X"}
      </h1>

      <div className="grid">
        {board.map((value, idx) => (
          <Card
            key={idx}
            index={idx}
            player={value}
            onPlay={play}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
