import React from 'react';

const hoc = (WrappedComponent,className)=>{
  return props=>(
      <div className={className}>
          <WrappedComponent />
      </div>
  )
}
export default hoc;
