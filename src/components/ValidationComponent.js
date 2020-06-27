import React from 'react';

const Validation = (props)=>{
  let length=null
  if(props.inputLength < 5){
    length=<h3>Text too short</h3>
  }else{
    length=<h3>Text too long</h3>
  }
  return(
    <div>
      {length}
    </div>
  )
}
export default Validation
