import React from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    const [address, setAddress] = React.useState("0x")

    return (
        <UserContext.Provider value={{user, setUser, address, setAddress}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider