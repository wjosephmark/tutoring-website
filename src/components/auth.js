import React, {useState, useEffect} from "react"
import {navigate} from "hookrouter";


export default function Auth(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const u = "kilee"
    const p = "Swim6678"

    const handleLoginClick = () => {
        if(username == u && password == p) {
            props.setLoggedInStatus(true)
            navigate("/availability")
        }
    }

    const handleCreateAccountClick = () => {
        n
    }

    return (
        <div className="auth-app">
            <div className="input-wrapper">
                <input type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                {handleLoginClick}
                <div className="buttons-wrapper">
                    <button className="btn" onClick={() => handleLoginClick()}>Login</button>
                    <button className="btn" onClick={() => handleCreateAccountClick()}>Create Account</button>
                </div>

            </div>
        </div>
    )
}