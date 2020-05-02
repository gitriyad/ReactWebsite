import React from 'react';
import classes from './ConnectWithUs.module.css';
const ConnectWithUs=()=>{
    return(
        <div className={classes.container}>
            <h1>Connect with us</h1>
            <div className={classes.flexcontainer}>
                <div className={classes.left}>
                <a href="htts://www.google.com">Sign In</a>
                </div>
            <div className={classes.right}>
                <h1>SIGN UP</h1>
                <p>Email:</p>
                <input type="text"></input><br/>
             <button>SUBMIT</button>
            </div>
            </div>
            
        </div>
    );
}
export default ConnectWithUs;