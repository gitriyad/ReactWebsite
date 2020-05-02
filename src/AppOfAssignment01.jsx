import React,{useState} from 'react';
import ValidationComponent from './Assignment01/ValidationComponent.jsx';
import CharComponent from './Assignment01/CharComponent.jsx';
const AppOfAssingment01=()=>{
    const [paraState,paraSetState]=useState({
       len:"",
        text:""
    });
    const lengthHandler=(event)=>{
        let text=event.target.value;
        let len=event.target.value.length;
        if(len>0){
            paraSetState({
           len:len,
            text:text
        });
        }else{
            paraSetState({
                len:"",
                text:text
            })
        }
        
    };
    let textarr=paraState.text.split("");
    const componentDeleteHandler=(index)=>{
        let arr=[...textarr];
        arr.splice(index,1);
        let len=arr.length;
        let text=arr.join("");
        if(len>0){
        paraSetState({
            len:len,
            text:text
        });
        }else{
            paraSetState({
               len:"",
                text:text
            });
        }
    }
    return(
        <div>
            <input type="text" onChange={(event)=>{lengthHandler(event)}} value={paraState.text}/>
            <p>{paraState.len}</p>
            <ValidationComponent len={paraState.len}/>
            {
                textarr.map((val,index)=>{
                    return <CharComponent char={val} click={()=>{componentDeleteHandler(index)}}/>
                })
            }
        </div>
        
    );
}
export default AppOfAssingment01;