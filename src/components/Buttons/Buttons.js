import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import "./Buttons.css";

export default function Buttons() {
    return (
        <div className="btn-container">
            <a className="btn btn-main hvr-grow" href="mailto:muhamadhashemi142@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="icon icon-main"/>
                <span className="btn-text btn-text--main">
                    Email
                </span>
            </a>
            <a className="btn btn-secondary hvr-grow" href="https://www.linkedin.com/in/muhamad-hashemi-22962a227">
                <FontAwesomeIcon icon={faLinkedin} className="icon icon-secondary"/>
                <span className="btn-text btn-text--main">
                    Linkedin
                </span>
            </a>
        </div>
    );
}
