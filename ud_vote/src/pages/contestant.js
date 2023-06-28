
import React from 'react';
import classes from '../styles/contestant.module.css';
import { Navbar } from './navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Contestant(props) {
    const handleVote = () => {
        toast.info('Confirm your vote?', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: false,
            draggable: false,
            pauseOnHover: false,
            closeButton: (
                <button className={classes.toastButton} onClick={handleVoteConfirmation}>
                    Yes
                </button>
            ),
        });
    };

    const handleVoteConfirmation = () => {
        // Perform the vote submission logic here
        // You can make an API call or update the state accordingly
        // Example: submitVote(candidateId);
        toast.success('Vote confirmed');
    };

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.rightContainer}>
                    <p>Select President</p>
                </div>
                <div className={classes.btns}>
                    <div className={classes.btn}>
                        <img src="kikwete.jpg" alt="jk" />
                        <p>JK</p>
                        <p>CoSS</p>
                        <button onClick={handleVote}>VOTE</button>
                    </div>
                    <div className={classes.btn}>
                        <img src="SAMIA.jpg" alt="sh" />
                        <p>SSH</p>
                        <p>UDBS</p>
                        <button onClick={handleVote}>VOTE</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}






