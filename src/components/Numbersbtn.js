import React from "react";

export default function Numberbtn(props) {
    return (
            <button disabled={props.used} className="number-btn" onClick={()=>props.choseNumber(props.value)}>{props.value}</button>
    )
}

