import React from 'react';
import withCount from './countHoc'

const hover =(props)=>{
  return(
    <h1 onMouseOver={props.increment}>Hovered {props.count} times</h1>
  )
}
export default withCount(hover)
