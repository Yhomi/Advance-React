import React from 'react';
import './person.css';

const personfunc = (props)=>{
    return(
        <div className="person">
            <h1 onClick={props.click}>My name is {props.name} and I'm {props.age}</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}
export default personfunc;
