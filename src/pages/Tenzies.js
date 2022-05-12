import React from "react"
import Die from "../components/Die"
import { nanoid } from "nanoid"
import ReactConfetti from "react-confetti"
import {GiRollingDices} from "react-icons/gi"

export default function Tenzies() {
    const [dieValue, setDieValue] = React.useState(allNewDice)
    const [tenzies, setTenzies] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const [record, setRecord] = React.useState(99)
    const [showRules, setShowRules] = React.useState(false)


    // use Effect to determinate if the user has won
   React.useEffect(() => {
        const allHeld = dieValue.every(die => die.isHeld)
        const firstValue = dieValue[0].value
        const allSameValue = dieValue.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            setShowRules(false)
        }
    }, [dieValue])
    
   
    // function to start new set of dice
    function allNewDice() {
        const dieArray = []
        for (let i=0; i<10; i++) {
            dieArray.push({value: Math.ceil(Math.random()*6), isHeld: false, id: nanoid()})
        }
        return dieArray
        
    }
     
    // function to roll the dice
    function rollDice() {
        if (tenzies) {
            setRecord(prevRecord=> prevRecord > count? count : prevRecord)
            setDieValue(allNewDice)
            setTenzies(false)
            setCount(0)
        }
        else {
        setDieValue(prevDieValue => prevDieValue.map(die => {
            return die.isHeld? die : {...die, value: Math.ceil(Math.random()*6)}
        })) 
        setCount(prevCount => prevCount + 1)
         }
    }

    // function to hold the dice 
    function holdDice(id) {
        setDieValue(prevDieValue => prevDieValue.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} :
            die
        }))
       
    }

    function rulesHandler() {
        setShowRules(prevRules => !prevRules)
    }
    
// Creating the dice
const diceElements = dieValue.map(obj => <Die value={obj.value} isHeld={obj.isHeld} key={obj.id} onClick={() => holdDice(obj.id)}/>)
// Diplaying that user won or button for rules
const display = tenzies? <h2>Congratulations, you won!</h2> : (<button className="btn-die btn-show" onClick={rulesHandler}>Show Rules</button>) 

// Frontend
    return (
        <>
        {tenzies && <ReactConfetti/>}
        <div className="box-container-border">   
        <div className="box-container">
            <h1 className="tenzies-title"><GiRollingDices />Tenzies<GiRollingDices /></h1>
            {showRules? (
                <div className="rules-container">
                    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p> 
                    <button className="btn-die"onClick={rulesHandler}>Close</button>
                </div> ) : display
            }
            
            <div className="die-container">
            {diceElements}
            </div>
            <button className="roll-btn" onClick={rollDice}>{tenzies? "New Game" : "Roll"}</button>
            <div className="tries-info">
            <p className="count-tries">Number of tries: {count}</p>
            <p className="count-tries">Record: {record}</p>
            </div>
        </div>
        </div>
        </>
    )
}