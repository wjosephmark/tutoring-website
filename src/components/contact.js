import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contact() {

    const handleImgClick = () => {
        return null
    }

    return (
        <div className="app">
            <div className="email-wrapper">
                {/* <FontAwesomeIcon icon="envelope"/> */}
                <img 
                    className="mail-image"
                    src="https://www.iconfinder.com/data/icons/neon-line-social-circles-black/100/Neon_Line_Social_Circles_50Icon_10px_grid-51-512.png"
                    onClick={() => handleImgClick()}
                />
                <a href="mailto:tutoringbykilee@gmail.com">tutoringbykilee@gmail.com</a>
            </div>
        </div>
    );
}