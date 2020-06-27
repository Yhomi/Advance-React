import React,{Component} from 'react';
import Person from './components/personHook';
import UserInput from "./components/userInput";
import UserOutput from './components/userOutput';

import './App.css';

class App extends Component{
  state={
    username:'Yhomi'
  }
  changeName =(e)=>{
    this.setState({
      username:e.target.value
    })
  }
  render(){

    return (
      <div className="App">
        <h1>Hello World</h1>
        {/*<Person />*/}
        <UserInput change={this.changeName} val={this.state.username} />
        <UserOutput  userName={this.state.username} />
        <UserOutput  userName="BigMom" />
        <UserOutput  userName='Kaido' />

      </div>
    );
  }

}

export default App;
