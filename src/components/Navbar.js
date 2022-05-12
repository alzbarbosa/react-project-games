import React from "react"
import logo from "../logo.svg"
import { Link } from "react-router-dom"


export default function NavBar() {
    return (
    <nav className="navbar">
        <div className="logo-all">
        <img src={logo} alt="logo" width="50px" height="auto"/>
        <h3 className="logo-name">React Games</h3>
        </div>
        <ul className="menu-items">
            <Link to="/"><li>Home</li></Link>
            <li>Projects</li>
            <li>About Me</li>
        </ul>
    </nav>
    )
}