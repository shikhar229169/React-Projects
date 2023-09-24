import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import PokemonContext from "../context/PokemonContext";

function Login() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pokemonName, setPokemonName] = useState('')
    const [pokemonType, setPokemonType] = useState('')
    const [pokemonWeight, setPokemonWeight] = useState('')

    const { setUser, address } = useContext(UserContext)
    const { setPokemonData } = useContext(PokemonContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, password, address })
    }

    const handlePokemonSubmit = (e) => {
        e.preventDefault()
        setPokemonData({ pokemonName, pokemonType, pokemonWeight })
    }

    return (
        <>
        <div>
            <h2>Login</h2>
            <input type="email" value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Mail" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            <h2>Pokemon Login</h2>
            <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} placeholder="Enter Pokemon Name" />
            <input type="text" value={pokemonType} onChange={(e) => setPokemonType(e.target.value)} placeholder="Enter Pokemon Type" />
            <input type="text" value={pokemonWeight} onChange={(e) => setPokemonWeight(e.target.value)} placeholder="Enter Pokemon Power" />
            <button onClick={handlePokemonSubmit}>Submit</button>
        </div>
        </>
    )
}

export default Login