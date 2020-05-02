import React from 'react';
import classes from './navComponent.module.css';
const NavComponent=()=>{
    
    return(
        <div className={classes.nav}>
            <a className={classes.left} href="https://www.google.com"><img src="https://amazingworkz.com/wp-content/uploads/2019/10/building-digital-brand1.jpg" alt="Brand"/></a>
            <a className={classes.left+" "+classes.brand} href="https://www.google.com">Brand Name</a>
            <a href="https://www.google.com">Page</a>
            <a href="https://www.google.com">Page</a>
            <a href="https://www.google.com">Page</a>
            <a href="https://www.google.com">Page</a>
            <a className={classes.push} href="https://www.google.com">Page</a>
        </div>
    );
}
export default NavComponent;