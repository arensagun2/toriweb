// Modules
import { useState } from 'react';
// Components

// Styles
import './Navigation.css';

export default function Navigation(props) {
    const [activePage, setActivePage] = useState("home");

    const changeActive = (toPage) => {
        setActivePage(toPage);
        props.changePage(toPage);
    }

    return(
        <div className='Navigation'>
            <h1>Victoria</h1>

            <div className='Links'>
                <button className={activePage === "home" ? "linkbtn active" : "linkbtn"} onClick={() => changeActive("home")} >Home</button>
                <button className={activePage === "social" ? "linkbtn active" : "linkbtn"} onClick={() => changeActive("social")} >Social</button>
            </div>
        </div>
    )
}