import React, { useState } from "react";
import PokemonContext from "./PokemonContext";

function PokemonContextProvider({ children }) {
    const [pokemonData, setPokemonData] = useState(null)

    return (
        <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider