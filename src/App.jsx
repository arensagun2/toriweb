// Modules
import { useState } from 'react'
// Components
import Navigation from './components/navigation/Navigation'
import HomePage from './pages/homepage/HomePage'
import SocialPage from './pages/socialpage/SocialPage'
import Footer from './components/footer/Footer'
// Styles
import './App.css'

function App() {
  const [page, setPage] = useState("home");

  const changePage = (toPage) => {
    setPage(toPage);
  }

  return (
    <div>
      <Navigation changePage={changePage} />
      {page === "home" && <HomePage />}
      {page === "social" && <SocialPage />}
      <Footer />
    </div>
  )
}

export default App
