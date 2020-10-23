import React, {useState, useEffect} from "react"
import {navigate} from "hookrouter";
import axios from "axios"


export default function Auth(props) {
    const [email, setEmail] = useState("empty")
    const [firstName, setFirstName] = useState("empty")
    const [lastName, setLastName] = useState("empty")
    const [password, setPassword] = useState("empty")
    const [confirmPassword, setConfirmPassword] = useState("empty")
    const [authStatus, setAuthStatus] = useState("login-wrapper")
    const [users, setUsers] = useState([])
    const [invalidLogin, setInvalidLogin] = useState("")
    const [differentPasswords, setDifferentPasswords] = useState("")

    const getUsers = () => {
        axios.get("http://localhost:5000/users")
          .then(data => setUsers(data.data))
          .catch(err => console.log(err))
    }

    const handleLoginClick = () => {
        // console.log(props.loggedInUser)
        // console.log(email, password)
        // if(props.loggedInUser.email == email && props.loggedInUser.password == password) {
        //     props.setLoggedInStatus(true)
        //     navigate("/availability")
        // }

        if(password == "Swim6678" && email == "kilee"){
            props.setLoggedInStatus(true)
            navigate("/availability")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(password != confirmPassword){
            setDifferentPasswords("Passwords do not match")
        }else if(email.length == 0 || firstName.length == 0 || lastName.length == 0 || password.length == 0 || confirmPassword.length == 0) {
            setDifferentPasswords("All fields are required")
        } else {
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
              .then(
                  setAuthStatus("login-wrapper")
              )
              .catch(error => {
                console.log("An error occured", error)
            });
        }
      }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)

        // users.forEach(user => {
        //     if(user.email == email) {
        //         props.setLoggedInUser(user)
        //     }
        // });
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
                        <input type="text" placeholder="Email" onChange={e => handleEmailChange(e)} />
                        {/* <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} /> */}
                        <input type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                        <p>{invalidLogin}</p>
                    </div>
                    <div className="buttons-wrapper">
                        <button className="btn" onClick={() => handleLoginClick()}>Login</button>
                        {/* <button className="btn"  onClick={() =>setAuthStatus("create-wrapper")}>Create Account</button> */}
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
                        <p>{differentPasswords}</p>
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