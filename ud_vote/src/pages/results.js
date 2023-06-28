import React from 'react'
import classes from '../styles/results.module.css'
import { Navbar } from "./navbar";

export function Results(props) {
    

    return (
        <>
        <Navbar></Navbar>
             <div className={classes.container}>

                <div className={classes.rightContainer}>
                    <p>Results</p>
                </div>
                <div className={classes.btns}>

                <div className={classes.btn}>
                    <p>VOTERS</p>
                </div>

                <div className={classes.btn}>
                    <p>CONTESTANTS</p>
                </div>

                <div className={classes.btn}>
                    <p>VOTES</p>
                </div>

                </div>
               


            </div> 
        </>
    )
}
