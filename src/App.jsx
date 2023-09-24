import { useState } from 'react'
import UserContextProvider from './context/userContextProvider'
import PokemonContextProvider from './context/PokemonContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <UserContextProvider>
    <PokemonContextProvider>
      <Navbar />
      <h1>Billi Bole Meow and Meow Meow Meow</h1>
      <Login />
      <Profile />
    </PokemonContextProvider>
    </UserContextProvider>
  )
}

export default App
