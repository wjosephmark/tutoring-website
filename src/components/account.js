import React, {useState, useEffect} from 'react'
import {navigate} from 'hookrouter'

export default function Account(props) {
    const [edit, setEdit] = useState(false)
    const [newEmail, setNewEmail] = useState("")
    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")

    const email = props.loggedInUser.email
    const firstName = props.loggedInUser.first_name
    const lastName = props.loggedInUser.last_name
    
    const handleLogoutClick = () => {
        props.setLoggedInStatus(false)
        props.setLoggedInUser([])
        navigate("/")
    }

    if(props.loggedInStatus == true){
        if(edit == false) {
            return(
                <div className="account-app">
                    <div className="user-info-wrapper">
                        <div className="email-wrapper">
                            <p>{email}</p>
                        </div>
                        <div className="name-wrapper">
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <button onClick={() => setEdit(true)}>Edit Account</button>
                        <button onClick={() => handleLogoutClick()}>Logout</button>
                    </div>
                </div>
            )
        } else {
            return(
                <form className="account-app">
                    <div className="user-input-wrapper">
                        <div className="email-input-wrapper">
                            <input type="text" value={email} onChange={(e) => setNewEmail(e.target.value)} />
                        </div>
                        <div className="name-input-wrapper">
                            <input type="text" value={firstName} onChange={(e) => setNewFirstName(e.target.value)} />
                            <input type="text" value={lastName} onChange={(e) => setNewLastName(e.target.value)} />
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