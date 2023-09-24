import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import PokemonContext from "../context/PokemonContext";

function Profile() {
    const { user } = useContext(UserContext)
    const { pokemonData } = useContext(PokemonContext)

    if (!user || !pokemonData) {
        return <div> Please Login! </div>
    }

    return (
        <>
        <div>
            Welcome! {user.userName}, {user.password}, {user.address}
        </div>
        <div>
            Gotcha! yeah pokemon - {pokemonData.pokemonName}, {pokemonData.pokemonType}, {pokemonData.pokemonWeight}
        </div>
        </>
    )
}

export default Profile