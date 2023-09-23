import React, { useEffect, useState } from "react";
import networks from "../assets/constants";

function Navbar() {
    const [userAddress, setUserAddress] = useState("0x")
    const [chainId, setChainId] = useState(window.ethereum?.chainId)
    const [err, setErr] = useState(false)
    const [connected, setConnected] = useState(false)

    const connect = async() => {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            setErr(false)
            // setConnected(true)
            console.log(4);
            const addr = window.ethereum.selectedAddress
            setUserAddress(addr.substring(0, 6) + "...." + addr.substring(addr.length - 4))
        }
        catch(err) {
            if (err.message.toLowerCase().includes("user rejected")) {
                setErr(true)  
            }
        }
    }

    window.ethereum.on("accountsChanged", () => {
        const addr = window.ethereum.selectedAddress
        console.log(window.ethereum.chainId);
        setUserAddress(addr.substring(0, 6) + "...." + addr.substring(addr.length - 4))
    })

    window.ethereum.on('chainChanged', (chainId) => {
        const _chainId = parseInt(chainId)
        console.log("Chain Id is: ", _chainId);
        console.log("Network Name is: ", networks[_chainId].name);
        setChainId(_chainId)
    });

    const ok = {
        "text-align": "center"
    }

    return (
        <div>
          <nav>
            <input type="text" value={userAddress} className="rounded-xl p-2 m-2" style={ok} readOnly />
            <button hidden={connected} onClick={connect} className="bg-gray-700 p-2">Connect</button>

            {err ? <div >Error</div> : <></>}
          </nav>  
        </div>
    )
}

export default Navbar