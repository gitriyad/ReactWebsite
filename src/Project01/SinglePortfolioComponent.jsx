import React from 'react';
import classes from './SinglePortfolioComponent.module.css';
const SinglePortfolioComponent=(props)=>{
    const RotateImage=(event,elem,id)=>{
        let x=event.clientX;
        let y=event.clientY;
        let d=document.querySelectorAll(`.${elem}`)[id];
        if(y<=150){
             d.style.transform="rotateX("+Math.floor((y/10)-30)+"deg) rotateY("+Math.floor((x/10)-25)+"deg) scale(1.05)";
        }
        if(y>150){
            d.style.transform="rotateX("+Math.floor((y/10)-30)+"deg) rotateY("+Math.floor((x/10)-25)+"deg) scale(1.05)";
        }
        if(x>300){
            d.style.transform="rotateX("+Math.floor((y/25)-30)+"deg) rotateY("+Math.floor((x/25)-25)+"deg) scale(1.05)";
        }
        d.addEventListener("mouseleave",function(){
           d.style.transform="rotateX(0deg) rotateY(0deg) scale(1)"; 
        });
    }
    
    return(
        <div className={classes.port} onMouseMove={(event)=>RotateImage(event,classes.port,props.id)}>
            <img src={props.src} alt="project"/>
            <div className={classes.linksdiv}>
                <a href="https://www.google.com">Project Link</a>
                <a  className={classes.push} href="https://www.google.com">Github Link</a>
            </div>
        </div>
    
    );
}
export default SinglePortfolioComponent;