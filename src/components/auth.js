import React, {useState, useEffect} from "react"
import {navigate} from "hookrouter";
import axios from "axios"


export default function Auth(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])
    const [targetUser, setTargetUser] = useState("")

    const getUsers = () => {
        axios.get("http://localhost:5000/users")
          .then(data => setUsers(data.data))
          .catch(err => console.log(err))
      }

    const handleLoginClick = () => {
        users.forEach(user => {
            if(user.email == username) {
                setTargetUser(user)
                console.log(targetUser)
            }
        });
    }

    const handleCreateAccountClick = () => {
        null
    }

    useEffect(() => {
        getUsers()
      }, [])
    

    return (
        <div className="auth-app">
            <div className="input-wrapper">
                {targetUser.first_name}
                {targetUser.last_name}
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