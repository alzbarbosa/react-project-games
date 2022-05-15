import React from "react"
import {BsArrowRightCircle} from "react-icons/bs"
import {Link} from "react-router-dom"

export default function Project(props) {

    return (
        <Link to={props.link}>
        <div className="container-games">
        <h2 className="project-title">{props.name}</h2>
        <img className="img-games-react" src={props.image} alt={props.name}/>
        <div className="project-info">
        <p className="project-details">{props.text}</p>
        <p className="project-link">Play the Game<BsArrowRightCircle/></p>
        </div>
        </div>
        </Link>
        
        )
        }