import React from "react";

export default function Image(props) {
    return (
    <img 
    src={props.src} 
    alt={props.img} 
    className={props.className} 
    onClick={props.onClick}/> 
    )
}

/*
export default function Image(props) {
    return (
    <img src={props.isSelected? props.img : card} alt={props.img} className={props.className} onClick={props.foundPair? props.isPaired : props.onClick}/> 
    )
}


*/