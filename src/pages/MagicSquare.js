import React from "react";
import Square from "../components/Square";
import Numberbtn from "../components/Numbersbtn";
import ReactConfetti from "react-confetti";

export default function MagicSquare() {


const [board, setBoard] = React.useState(Array(9).fill(null))
const [selectedNumber, setSelectedNumber] = React.useState(null)
const [win, setWin] = React.useState(false)
const [numbersToPlay, setNumbersToPlay] = React.useState([{number: 1, used: false},{number: 2, used: false}, {number: 3, used: false}, {number: 4, used: false}, {number: 5, used: false}, {number: 6, used: false}, {number: 7, used: false}, {number: 8, used: false}, {number: 9, used: false}])

React.useEffect(()=> {
let winner = false
if (
board[0] + board[1] + board[2] === 15 &&
board[3] + board[4] + board[5] === 15 &&
board[6] + board[7] + board[8] === 15 &&
board[0] + board[3] + board[6] === 15 &&
board[1] + board[4] + board[7] === 15 &&
board[2] + board[5] + board[8] === 15 &&
board[0] + board[4] + board[8] === 15 &&
board[2] + board[4] + board[6] === 15) {
    winner = true
} else {
    winner = false
}
setWin(winner)

},[board])

function choseNumber(number) {
setSelectedNumber(number)
}

function actionPlayer(i) {
    const updatedBoard = [...board]
    let index = updatedBoard.findIndex(number => number === selectedNumber)
    updatedBoard[i] = selectedNumber
    if ( index > -1 ) {
        updatedBoard[index] = null
        setBoard(updatedBoard)
        setNumbersToPlay(prevNumbers => prevNumbers.map(number => {
        return number.number === selectedNumber? {...number, used: false} : number
    }))
    } else {
    setBoard(updatedBoard)
    setNumbersToPlay(prevNumbers => prevNumbers.map(number => {
        return number.number === selectedNumber? {...number, used: true} : number
    }))
    }
}
console.log(numbersToPlay)
/* ==== this options is to add a fixed number at the start of the game ====
function fixedNumber() {
    const number = Math.ceil(Math.random()*9)
    const index = Math.floor(Math.random() * numberGroup.length)
    setSelectedNumber(numberGroup.splice(index,1,number))
}
*/

const newBoard = board.map((number, i) => {
    return (
    <Square className="square" value={number} key={i} onClick={()=>actionPlayer(i)}/>
    )
})

const winnerBoard = board.map((number, i) => {
    return (
    <Square value={number} key={i} className="square"/>
    )
})

const btnGenerator = numbersToPlay.map(number => {
    return (
        <Numberbtn value={number.number} choseNumber={choseNumber} key={number.number} used={number.used} />
    )
})

function newGame() {
    setWin(false)
    setBoard(Array(9).fill(null))
    setNumbersToPlay([{number: 1, used: false},{number: 2, used: false}, {number: 3, used: false}, {number: 4, used: false}, {number: 5, used: false}, {number: 6, used: false}, {number: 7, used: false}, {number: 8, used: false}, {number: 9, used: false}])
}

    return (
        <div>
        {win && <ReactConfetti />}
        <article className="container-board">
            <header className="header-magic-square">
            <h1 className="title-magic-square">Magic Square</h1>
            <h3>3x3</h3>
            </header>
        <section className="main-board">
            {win? winnerBoard : newBoard}
        </section>
        <section className="btn-container">
        {btnGenerator}
        </section>
        <button className="btn-newgame" onClick={newGame}>start new game</button>
     
        
        </article>
       </div>
    )
}