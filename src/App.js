import React,{Component} from 'react';
import Person from './components/personHook';
import UserInput from "./components/userInput";
import UserOutput from './components/userOutput';
import Validation from './components/ValidationComponent';
import CharComp from './components/charComponent';

import './App.css';

class App extends Component{
  state={
    username:'Yhomi',
    userInput:''
  }
  changeName =(e)=>{
    this.setState({
      username:e.target.value
    })
  }

  inputChange = (e)=>{
    this.setState({
      userInput:e.target.value
    })
  }

  deleteText = (index)=>{
    // console.log('click')
    const text = this.state.userInput.split('')
    text.splice(index,1)
    const newText=text.join('')
    this.setState({userInput:newText})
  }


  render(){
    const charList=this.state.userInput.split('').map((char,index)=>{
      return <CharComp character={char}
              key={index} click={()=>this.deleteText(index)}
          />
    })
    return (
      <div className="App">
        <h1>Hello World</h1>
        {/*<Person />
        <UserInput change={this.changeName} val={this.state.username} />
        <UserOutput  userName={this.state.username} />
        <UserOutput  userName="BigMom" />
        <UserOutput  userName='Kaido' /> */}
        <input type="text"
          onChange={this.inputChange}
          value={this.state.userInput}>
        </input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }

}

export default App;
