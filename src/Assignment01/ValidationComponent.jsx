import React from 'react';
const ValidationComponent=(props)=>{
    let setText="";
    if(props.len>5){
        setText="Text long enough";
    }
    else if(props.len==0){
        setText="";
    }else{
        setText="Text too short"
    }
    return(
        <p>{setText}</p>
    );
}
export default ValidationComponent;