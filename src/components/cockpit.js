import React from 'react';

const cockpit = (props)=>{
  const btn={
    backgroundColor:'green',
    border:'1px solid #fff',
    color:'white',
    padding:'16px',
    marginTop:'10px',
    // ':hover':{
    //   backgroundColor:'lightgreen',
    //   color:'black'
    // }
  }

  if(props.showPersons){
      btn.backgroundColor='red'
  }
  const classes=[]
  if(props.persons.length <=2){
    classes.push('red') //classes=['red']
  }
  if(props.persons.length <=1){
    classes.push('bold') //classes=['red','bold']
  }
  return(
    <div>
      <h1>Hello from React World</h1>
      <p className={classes.join(' ')}>Chrome debugger is powerful</p>
      {/*<button style={btn} onClick={this.SwitchName}>Switch Name</button>*/}
      <button style={btn} onClick={props.toggle}>Toggle Person</button>
    </div>
  )
}
export default cockpit
