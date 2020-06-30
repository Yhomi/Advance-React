import React,{useEffect,useRef,useContext} from 'react';
import AuthContext from './authContext';

const Cockpit = (props)=>{
  const toggleBtnRef = useRef()
  const authContext = useContext(AuthContext)
  console.log('Login:',authContext.login)
  useEffect(() =>{
    console.log('[Cockpit.js] useEffect');
    console.log(toggleBtnRef)
    const timer = setTimeout(()=>{
      toggleBtnRef.current.click()
      // alert('useEffect')
    },2000)
    return ()=>{

      clearTimeout(timer)
      console.log('[CockPit.js]:useEffect clean up works well')
    }
  },[]);

  useEffect(()=>{
    console.log('[Cockpit.js] 2nd useEffect');
    return ()=>{
      console.log('[CockPit.js] 2nd:useEffect clean up works well')
    }
  })
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
  if(props.personsLength <=2){
    classes.push('red') //classes=['red']
  }
  if(props.personsLength <=1){
    classes.push('bold') //classes=['red','bold']
  }
  return(
    <div>
      <h1>Hi I am {props.titleApp}</h1>
      <p className={classes.join(' ')}>Chrome debugger is powerful</p>
      {/*<button style={btn} onClick={this.SwitchName}>Switch Name</button>*/}
      <button ref={toggleBtnRef} style={btn} onClick={props.toggle}>Toggle Person</button>
      {/*<AuthContext.Consumer>{(context)=><button onClick={context.login}>Login</button>}</AuthContext.Consumer>*/}
      <button onClick={authContext.login}>Login</button>

    </div>
  )
}
export default React.memo(Cockpit)
