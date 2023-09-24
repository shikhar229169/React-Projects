import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Navbar() {
    const [addr, setAddr] = useState("0x")
    const { setAddress } = useContext(UserContext)

    const handleConnect = async() => {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            console.log("Connected!");
            setAddr(window.ethereum.selectedAddress)
            setAddress(window.ethereum.selectedAddress)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            Current Address: {addr}
            <button onClick={handleConnect}>Connect</button>
        </div>
    )
}

export default Navbar