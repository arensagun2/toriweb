// Modules
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components

// Styles
import './Navigation.css';

export default function Navigation(props) {
    const [activePage, setActivePage] = useState("home");
    const navigate = useNavigate();

    const changeActive = (page) => {
        setActivePage(page);
    }

    return(
        <div className='Navigation'>
            <h1>Victoria</h1>
            <div className='Links'>
                <Link to="/" className={activePage === "home" ? "linkbtn active" : "linkbtn"} onClick={() => changeActive("home")}>Home</Link>
                <Link to="/social" className={activePage === "social" ? "linkbtn active" : "linkbtn"} onClick={() => changeActive("social")}>Social</Link>
            </div>
        </div>
    )
}