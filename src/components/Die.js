import React from "react";
import {CgDice1, CgDice2, CgDice3, CgDice4, CgDice5, CgDice6} from "react-icons/cg"

export default function Die(props) {
    const styles = {backgroundColor: props.isHeld ? "#59E391" : "white"}
    return (
        <>
        <div className="die" style={styles} onClick={props.onClick}>
            {props.value === 1? <CgDice1 /> : props.value === 2? <CgDice2 /> : props.value === 3? <CgDice3 /> : props.value === 4? <CgDice4 /> : props.value === 5? <CgDice5 /> : <CgDice6 />}
            </div>
        </>
    )
}