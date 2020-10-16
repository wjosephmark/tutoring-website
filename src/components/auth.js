import React, {useState, useEffect} from "react"
import {navigate} from "hookrouter";
import axios from "axios"


export default function Auth(props) {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [authStatus, setAuthStatus] = useState("login-wrapper")
    const [users, setUsers] = useState([])
    const [targetUser, setTargetUser] = useState("")
    const [invalidLogin, setInvalidLogin] = useState("")

    const getUsers = () => {
        axios.get("http://localhost:5000/users")
          .then(data => setUsers(data.data))
          .catch(err => console.log(err))
      }

    const handleLoginClick = () => {
        users.forEach(user => {
            if(user.email == email) {
                setTargetUser(user)
                console.log(targetUser)
            }
        });
    }

    const handleCreateAccountClick = () => {
        setAuthStatus("create-wrapper")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("hello")
        axios.post(
            "http://localhost:5000/users",
            {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                approved: false
            },
          )
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log("An error occured", error)
          });    
      }

    useEffect(() => {
        getUsers()
        props.handleLoginClick()
      }, [])
    
    if(authStatus == "login-wrapper") {
        return (
            <div className="auth-app">
                <div className={authStatus}>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                        <p>{invalidLogin}</p>
                    </div>
                    <div className="buttons-wrapper">
                        <button className="btn" onClick={() => handleLoginClick()}>Login</button>
                        <button className="btn"  onClick={() => handleCreateAccountClick()}>Create Account</button>
                    </div>
    
                </div>
            </div>
        )
    } else {
        return(
            <div className="auth-app">
                <form className={authStatus} onSubmit={() => handleSubmit(event)}>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <input type="text" placeholder="First name" onChange={e => setFirstName(e.target.value)} />
                        <input type="text" placeholder="Last name" onChange={e => setLastName(e.target.value)} />
                        <input type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                        <input type="password" placeholder="Re-enter password" onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="buttons-wrapper">
                        <button className="btn" onClick={() => setAuthStatus("login-wrapper")}>Cancel</button>
                        <button className="btn" type="submit">Create Account</button>
                    </div>

                </form>
            </div>
        )
    }
}