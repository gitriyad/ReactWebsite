import React from 'react';
const Person=(props)=>{
    const personStyle={
        textAlign:"center",
        border: "1px solid black",
        width: "60%",
        fontSize:"2em",
        margin:"0 auto 10px auto"
    }
    const inputStyle={
        width:"60%",
        marginBottom:"20px"
    }
    return(
        <div style={personStyle}>
            <p onClick={props.click}>Hello I am {props.name}. I am {props.age} years old</p>
            <input style={inputStyle} type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}
export default Person;