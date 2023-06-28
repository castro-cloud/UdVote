// import React from 'react';
// import classes from '../styles/contestant.module.css';
// import { Navbar } from "./navbar";

// export function ViceContestant(props) {
//     const handleVote = () => {
//         const confirmed = window.confirm('Confirm your vote?');
//         if (confirmed) {
//             // Perform the vote submission logic here
//             // You can make an API call or update the state accordingly
//             // Example: submitVote(candidateId);
//             console.log('Vote confirmed');
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className={classes.container}>
//                 <div className={classes.rightContainer}>
//                     <p>Select Vice President</p>
//                 </div>
//                 <div className={classes.btns}>
//                     <div className={classes.btn}>
//                         <img src="kamala.jpg" alt='kh' />
//                         <p>KH</p>
//                         <p>SoED</p>
//                         <button onClick={handleVote}>VOTE</button>
//                     </div>
//                     <div className={classes.btn}>
//                         <img src="hillary.jpg" alt='hc' />
//                         <p>HC</p>
//                         <p>CoET</p>
//                         <button onClick={handleVote}>VOTE</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }













import React from 'react';
import classes from '../styles/contestant.module.css';
import { Navbar } from './navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ViceContestant(props) {
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
                    <p>Select Vice President</p>
                </div>
                <div className={classes.btns}>
                    <div className={classes.btn}>
                        <img src="kamala.jpg" alt="kh" />
                        <p>KH</p>
                        <p>SoED</p>
                        <button onClick={handleVote}>VOTE</button>
                    </div>
                    <div className={classes.btn}>
                        <img src="hillary.jpg" alt="hc" />
                        <p>HC</p>
                        <p>CoET</p>
                        <button onClick={handleVote}>VOTE</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}


