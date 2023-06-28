import React from 'react'
import classes from '../styles/category.module.css'
import { Navbar } from "./navbar";
import { Link } from 'react-router-dom';



export function Category(props) {


    return (
        <>
            <Navbar></Navbar>
            <div className={classes.container}>
                
                <div className={classes.rightContainer}>
                    <p>Select Category</p>

                </div>
                <div className={classes.btns}>

                    <div className={classes.btn}>
                    <img src="Vote.png" alt="v" />
                        <Link to="/contestant"> <button >President</button></Link>
                        
                    </div>

                    <div className={classes.btn}>
                        <img src="Vote.png" alt="v" />
                        <Link to="/vcontestant"> <button >Vice President</button></Link>
                    </div>

                    <div className={classes.btn}>
                        <img src="Vote.png" alt="v" />
                        <Link to="/chaircontestant"> <button >College Chairperson</button></Link>
                    </div>
                    <div className={classes.btn}>
                        <img src="Vote.png" alt="v" />
                        <Link to="/gscontestant"> <button >General Secretary</button></Link>
                    </div>

                    <div className={classes.btn}>
                        <img src="Vote.png" alt="v" />
                        <Link to="/mpcontestant"> <button >Member of Parliament</button></Link>
                    </div>

                    <div className={classes.btn}>
                        <img src="Vote.png" alt="v" />
                        <Link to="/sscontestant"> <button >Special seats Representative</button></Link>
                    </div>
                </div>



            </div>

        </>
    )
}



