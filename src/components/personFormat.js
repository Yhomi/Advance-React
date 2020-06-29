import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Per from './person2';

const personFormatter = (props)=>
  props.persons.map((ace,index)=>{
      return <ErrorBoundary key={ace.id}><Per  name={ace.name} age={ace.age}
              click={()=>props.clicked(index)}
              change={e=>props.changed(e,ace.id)} /></ErrorBoundary>
  })
export default personFormatter
