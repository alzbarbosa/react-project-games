import React from "react"
import imgGames from "../Images/games.jpg"
import {BsArrowRightCircle} from "react-icons/bs"
import {Link} from "react-router-dom"

export default function Project(props) {

    return (
        <div className="container-games">
        <h2 className="project-title">{props.name}</h2>
        <img className="img-games-react" src={imgGames} />
        <div className="project-info">
        <p className="project-details">{props.text}</p>
        <Link to={props.link}><p className="project-link">Play the Game<BsArrowRightCircle/></p></Link>
        </div>
        </div>
        
        )
        }