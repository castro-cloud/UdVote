import React from 'react'
import classes from '../styles/statistics.module.css'
import { Navbar } from "./navbar";


export function Statistics(props) {
    

    return (
        <>
        <Navbar></Navbar>
            <div className={classes.container}>

<div className={classes.rightContainer}>
    <p>Previous Election</p>
    

</div>
<div className={classes.btn}>
    <p>2022</p>
</div>
<hr />

<div className={classes.btn1}>
    <p>2021</p>
</div>
<hr />

<div className={classes.btn2}>
    <p>2020</p>
</div>
<hr />

<div className={classes.btn3}>
    <p>2019</p>
</div>
<hr />
<div className={classes.btn4}>
    <p>2018</p>
</div>
<hr />
</div>

        </>
    )
}
