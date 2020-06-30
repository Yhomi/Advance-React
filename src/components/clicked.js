import React from 'react';
import withCount from './countHoc'

const clicked = (props)=>{
  return(
    <div>
        <button onClick={props.increment}>Button clicked {props.count} times</button>
    </div>
  )
}
export default withCount(clicked);
