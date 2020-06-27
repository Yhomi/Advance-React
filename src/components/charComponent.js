import React from 'react';

const charComp = (props)=>{
  const box={
    display:'inline-block',
    padding:'16px',
    margin:'16px',
    textAlign:'center',
    border:'1px solid black'
  }
  return(
    <div style={box} onClick={props.click}>
      {props.character}
    </div>
  )
}
export default charComp
