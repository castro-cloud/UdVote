import React from 'react'
import { Link } from 'react-router-dom';
import classes from "../styles/home.module.css";

export function Home(props) {
    

    return (
        <>

         <div className={classes.logo}>  <h1 >UDVote</h1></div>
          
          <div className={classes.container}>
          <div  className={classes.leftContainer}>
              <img src="udlogo.png" alt='ud'/>
          </div>
          <div  className={classes.rightContainer}>
              <h2>Your Vote</h2>
              <h1>matters</h1>
              <Link to="otp"> <button >Manual Verification</button></Link>
             
          </div>
          </div>  
        </>
    )
}
