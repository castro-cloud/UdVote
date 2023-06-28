import React from 'react'
import classes from "../styles/Navbar.module.css";
import { Link } from 'react-router-dom';


export function Navbar(props) {
    

    return (
        <>
           <header className={classes.header}>
            <h1>UDVote</h1>
            <nav className={classes.nav}>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Category</Link></li>
                <li><Link to="/results">Results</Link></li>
                <li><Link to="/statistics">Statistics</Link></li>
                </ul>
      
            </nav>
        
        </header>
        </>
    )
}
