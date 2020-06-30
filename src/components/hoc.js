import React from 'react';

const hoc = (WrappedComponent,className)=>{
  return props=>(
      <div className={className}>
          <WrappedComponent {...props} />
      </div>
  )
}
export default hoc;
