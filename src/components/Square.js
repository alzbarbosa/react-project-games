import React from "react";

export default function Square(props) {
    return (
        <div className={props.className} onClick={props.onClick} disable={props.disable}>{props.value}</div>
    )
}