import React from 'react'
import classes from '../styles/contestant.module.css'
import { Navbar } from "./navbar";
import { Link } from 'react-router-dom';



export function CollegeContestant(props) {


    return (
        <>
            <Navbar></Navbar>
            <div className={classes.container}>

                <div className={classes.rightContainer}>
                    <p>Select College Representatives</p>

                </div>
                <div className={classes.btns}>

                    <div className={classes.btn}>

                        <Link to="/chaircontestant"> <button >Chairperson</button></Link>
                    </div>






                </div>



            </div>

        </>
    )
}
