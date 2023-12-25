// Modules
import { useState } from 'react'
// Components
import Navigation from './components/navigation/Navigation'
import HomePage from './pages/homepage/HomePage'
// Styles
import './App.css'
import './components/navigation/Navigation.css'

function App() {
  return (
    <>
      <Navigation />
      <HomePage />
    </>
  )
}

export default App
