import React from 'react';

const userOutput = (props)=>{
  const card={
    width:'30%',
    border:'1px solid black',
    background:'#ccc',
    boxShadow:'#333',
    padding:'20px',
    marginTop:'20px',
    color:'red',
    marginLeft:'50px'
  }
  return(
    <div style={card}>
      <p>UserName: {props.userName}</p>
      <p>Some random text</p>

    </div>
  )
}
export default userOutput
