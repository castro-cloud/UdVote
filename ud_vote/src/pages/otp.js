import React from 'react'
import classes from '../styles/otp.module.css'
import { Link } from 'react-router-dom';


export function Otp(props) {


    return (
        <>
            <div className={classes.logo}>  <h1 >UDVote</h1></div>
            <div className={classes.container}>
                <div className={classes.leftContainer}>
                    <img src="let vote.png" alt='ud1' />
                </div>
                <div className={classes.rightContainer}>

                    <p>Enter Your Registration number</p>

                    <input type="text" placeholder='reg.No' />


                    <p>Enter the code sent</p>

                    <input type="text" placeholder='code' />


                    <p>Resend Code</p>



                    <Link to="/category"> <button >Proceed</button></Link>

                </div>
            </div>
        </>
    )
}





