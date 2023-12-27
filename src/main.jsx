// Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
// Components
import App from './App.jsx'
// Styles
import './index.css'

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faTiktok, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome, faTiktok, faInstagram, faFacebook);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
