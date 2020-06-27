import React from 'react';
import './person.css'

const userInput = (props)=>{
  return(
    <div>
      <p>User Input</p>
      <input type="text" className="input" onChange={props.change} value={props.val}></input>
    </div>
  )
}
export default userInput
