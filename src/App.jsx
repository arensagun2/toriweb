// Modules
import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
// Components
import Navigation from './components/navigation/Navigation'
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/footer/Footer'
// Styles
import './App.css'


function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
