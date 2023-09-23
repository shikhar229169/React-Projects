import { useState } from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1>Billi Bole Meow and Meow Meow Meow</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
