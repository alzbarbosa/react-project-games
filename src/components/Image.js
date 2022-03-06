import React from "react";
import card from "../Images/flag-of-Somalia.png"

export default function Image(props) {
    return (
    <img src={props.isSelected? props.img : card} alt={props.img} className={props.className} onClick={props.foundPair? props.isPaired : props.onClick}/> 
    )
}