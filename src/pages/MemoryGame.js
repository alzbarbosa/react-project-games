import React from "react"
import Image from "../components/Image"
import ReactConfetti from "react-confetti";
import {GiThink} from "react-icons/gi"

import card from "../Images/flag-of-Somalia.png"

let groupFlags =["./flags/flag-of-Brazil.png", "./flags/flag-of-Canada.png", "./flags/flag-of-Ecuador.png", "./flags/flag-of-France.png", "./flags/flag-of-Germany.png", "./flags/flag-of-Spain.png", "./flags/flag-of-Sweden.png", "./flags/flag-of-Switzerland.png"]
groupFlags = groupFlags.concat(groupFlags).sort()

export default function MemoryGame() {
const [imagesToPlay, setImagesToPlay] = React.useState([])
const [match, setMatch] = React.useState([])
const [win, setWin] = React.useState(false)
const [count, setCount] = React.useState(0)
const [record, setRecord] = React.useState(99)

/*const [lowestMove, setLowestMove] = React.useState(99)*/

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Starting a new game
function newGame() {
let startGame = []
win? setRecord(prevRecord=> prevRecord > count? count : prevRecord) : setRecord(prevRecord => prevRecord)
groupFlags.map((image, index) => {
return startGame.push({img: image, id: index, isSelected:false, foundPair: false})
})
shuffle(startGame)
setImagesToPlay(startGame)
setCount(0)
setWin(false)
}

React.useEffect(() => {
newGame()

}, [])


// Checking if the user has won
React.useEffect(() => {  
const lastSelected = [match[0]] 
const counter = count

setTimeout(() => {
 
if (match[1] && match[1][0].id === match[0][0].id) {
    setMatch(lastSelected)  
}  
else if (match[1] && match[1][0].img === match[0][0].img) {
    setMatch([])
    setImagesToPlay(prevImagesToPlay => prevImagesToPlay.map(image => {
        return image.id === match[0][0].id || image.id === match[1][0].id? {...image, foundPair: true} : image
    }))
    setCount(counter + 1)
    setWin(imagesToPlay.every(item => item.isSelected === true))
    
}
else if (match[1] && match[1][0].img !== match[0][0].img) {
    setImagesToPlay(prevImagesToPlay => prevImagesToPlay.map(image => {
        return image.id === match[0][0].id || image.id === match[1][0].id? {...image, isSelected: false} : image
    }))
    setCount(counter + 1)
    setMatch([])
    }

},400);

},[match])


// Flipping the images
function flipImage(id) {

if (match.length < 2) {
setImagesToPlay(prevImagesToPlay => prevImagesToPlay.map(image => {
    return image.id === id? {...image, isSelected: true} : image
}))
} else {
    console.log("processing pairs")
}

const cardSelected = imagesToPlay.filter(flag => {
    return flag.id === id
})



if (!match) {
    setMatch(cardSelected)
} 
else {
setMatch(prevValue => {
    return [...prevValue, cardSelected]})
}
}


// checking if the user found the pair
function isPaired() {
console.log("image already paired")
}

const elementsImages = imagesToPlay.map(flag => {
    return (
    <Image src={flag.isSelected? flag.img : card} 
    img={flag.img} 
    key={flag.id} 
    className="flag"
    onClick={flag.foundPair? isPaired : ()=>flipImage(flag.id)}
    />
    
    )
})

// Frontend
return (
    <>
        <article className="container-memory">
         <h1 className="title-memory"><GiThink />Memory Game <GiThink /></h1>
        <section className="images-container">
        {win && <ReactConfetti/>}
        {elementsImages}
        </section>
        <button className="btn-memory" onClick={newGame}>New Game</button>
        <section className="moves-info">
        <p className="count">Current move: {count}</p>
        <p className="count">Record: {record}</p>
        </section>
        </article>
    </>
    )
}
