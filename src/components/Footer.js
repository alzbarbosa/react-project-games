import React from "react";

export default function Footer() {
    return (
            <footer>
        <ul className="social-contacts">
            <li>
                <a href="https://www.twitter.com">
                    <i className="fab fa-facebook"></i>

                    Facebook</a>
            </li>
            <li>
                <a href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>

                    Twitter</a>
            </li>
            <li>
                <a href="https://www.twitter.com">
                    <i className="fab fa-github"></i>

                    Github</a>
            </li>
            <li>
                <a href="https://www.twitter.com">
                    <i className="fab fa-linkedin"></i>

                    LinkedIn</a>
            </li>
            <li>
                <a href="https://www.twitter.com">
                    <i className="fab fa-codepen"></i>

                    CodePen</a>
            </li>
        </ul>
        <h6 className="footer">&copy; 2022 Andre Barbosa</h6>
    </footer>
    )
}