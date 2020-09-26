import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contact() {
    return (
        <div className="app">
            <div className="email-wrapper">
                <FontAwesomeIcon icon="envelope"/>
                <a href="mailto:tutoringbykilee@gmail.com">Email me</a>
            </div>
        </div>
    );
}