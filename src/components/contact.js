import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {navigate} from "hookrouter"


export default function Contact() {

    const handleImgClick = () => {
        return(
            <a 
                href="mailto:tutoringbykilee@gmail.com"
            />
        )
    }

    return (
        <div className="contact-app">
            <div className="contact-header-wrapper">
                <h1>Conctact Me</h1>
            </div>
            <div className="contact-link-wrapper">

                <div className="phone-wrapper">
                    <img 
                        className="mail-image"
                        src="https://i.ibb.co/xY49wSL/phone-icon.jpg"
                        onClick={() => handleImgClick()}
                    />
                    <div className="phone-link-wrapper">
                        <a 
                            href="tel: 406-799-2817"
                            id="phone-link"
                        >(406) 799-2817</a>
                    </div>
                </div>
                
                <div className="email-wrapper">
                    <img 
                        className="mail-image"
                        src="https://www.iconfinder.com/data/icons/neon-line-social-circles-black/100/Neon_Line_Social_Circles_50Icon_10px_grid-51-512.png"
                        onClick={() => handleImgClick()}
                    />
                    <div className="email-link-wrapper">
                        <a 
                            href="mailto:tutoringbykilee@gmail.com"
                            id="email-link"
                        >tutoringbykilee@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}