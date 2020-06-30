import React,{Component} from 'react';
import './person.css';
import Aux from './auxiliary';
// import Radium from 'radium'

class PersonFunc extends Component{
  // const style={
  //   '@medi(min-width:500px)':{
  //     width:'450px'
  //   }
  // }
  render(){
    console.log('[Person.js] rendering....')
      return(
            <Aux>
              <h1 key='a1' onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age}</h1>,
              <p key='a2'>{this.props.children}</p>,
              <input key='a3' type="text" onChange={this.props.change} value={this.props.name} />
            </Aux>
      )
  }

}
export default PersonFunc;
