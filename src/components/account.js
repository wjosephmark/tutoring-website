import React, {useState, useEffect} from 'react'
import {navigate} from 'hookrouter'
import axios from "axios"

export default function Account(props) {
    const [edit, setEdit] = useState(false)
    const [newEmail, setNewEmail] = useState("")
    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")

    const email = props.loggedInUser.email
    const firstName = props.loggedInUser.first_name
    const lastName = props.loggedInUser.last_name
    const id = props.loggedInUser._id
    
    const handleLogoutClick = () => {
        props.setLoggedInStatus(false)
        props.setLoggedInUser([])
        navigate("/")
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(id)

        if(newFirstName.length == 0) {
            setNewFirstName(firstName)
        }

        if(newLastName.length == 0) {
            setNewLastName(lastName)
        }

        if(newEmail.length == 0) {
            setNewEmail(newEmail)
        }
        axios.patch(
            `http://localhost:5000/users/${id}`,
            {
                first_name: newFirstName,
                last_name: newLastName,
                email: newEmail,
            },
          )
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log("An error occured", error)
        });
    }

    if(props.loggedInStatus == true){
        if(edit == false) {
            return(
                <div className="account-app">
                        <div className="content-wrapper">
                            <p>Email: {email}</p>
                            <p>First name: {firstName}</p>
                            <p>Last name: {lastName}</p>
                            <div className="buttons-wrapper">
                                <button onClick={() => setEdit(true)}>Edit Account Info</button>
                                <button onClick={() => handleLogoutClick()}>Logout</button>
                            </div>
                        </div>
                    </div>
            )
        } else {
            return(
                <form className="account-app" onSubmit={() => handleSubmit(event)}>
                    <div className="inputs-wrapper">
                        <div className="input-wrapper">
                            <p>Email: </p>
                            <input type="text" placeholder={email} onChange={e => setNewEmail(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <p>First name: </p>
                            <input type="text" placeholder={firstName} onChange={e => setNewFirstName(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <p>Last name: </p>
                            <input type="text" placeholder={lastName} onChange={e => setNewLastName(e.target.value)} />
                        </div>
                        <div className="text-wrapper">
                            <p id="password-reset">
                                Please email me to reset your password
                            </p>
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <button onClick={() => setEdit(false)}>Cancel</button>
                        <button type="submit">Save Changes</button>
                    </div>
                </form>
            )
        }
    } else {
        return(
            <div className="not-signed-in-app">
                <div className="text-wrapper">
                    <h1>Please login to view your account information</h1>
                </div>
            </div>
        )
    }
}