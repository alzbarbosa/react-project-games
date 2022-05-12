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
