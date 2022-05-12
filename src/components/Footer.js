import React from "react";

import {BsLinkedin, BsGithub, BsFacebook} from "react-icons/bs"
import {FaCodepen} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import {RiChatSmile3Line} from "react-icons/ri"

export default function Footer() {
    return (
            
    <footer>
        <h2 className="footer-title">Contact Me<RiChatSmile3Line/></h2>
        <section className="contacts-section">
        <div className="email-container">
            <SiGmail className="icon-contact"/>
            <p className="email-text">alzbarbosa@gmail.com</p>
        </div>
        <div className="container-icons-contact">
            
        <BsLinkedin className="icon-contact"/>
        <BsGithub className="icon-contact"/>
        <BsFacebook className="icon-contact"/>
        <FaCodepen className="icon-contact"/>

        </div>
        </section>
        <h6 className="footer">&copy; 2022 Andre Barbosa</h6>
    </footer>
    )
}