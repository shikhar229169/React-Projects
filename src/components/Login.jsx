import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="email" value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Mail" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login