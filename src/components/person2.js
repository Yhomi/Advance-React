import React,{Component} from 'react';
import './person.css';
import Aux from './auxiliary';
import hoc from './hoc';
import PropType from 'prop-types';
import AuthContext from './authContext';
// import Radium from 'radium'

class PersonFunc extends Component{
  // const style={
  //   '@medi(min-width:500px)':{
  //     width:'450px'
  //   }
  // }
  constructor(props){
    super(props)
    this.inputRef=React.createRef()
  }
  static contextType =AuthContext
  componentDidMount(){
    // document.querySelector('input').focus()
    // this.inputElement.focus()
    console.log(this.inputRef)
    this.inputRef.current.focus()
    console.log(this.context.authenticated);
  }
  render(){
    console.log('[Person.js] rendering....')
      return(
            <Aux>
              {/* <AuthContext.Consumer>{(context)=>context.authenticated ?
                   <h3>Authenticated!</h3>:
                     <h3>Please login</h3>}
               </AuthContext.Consumer> */}
              {this.context.authenticated ?
                <h3>Authenticated!</h3>:
                <h3>Please login</h3>
              }

              <h1 key='a1' onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age}</h1>
              <p key='a2'>{this.props.children}</p>
              <input key='a3' type="text"
                onChange={this.props.change}
                value={this.props.name} className="input"

                ref={this.inputRef}
                />
            </Aux>
      )
  }

}

PersonFunc.propTypes={
  click:PropType.func,
  change:PropType.func,
  name:PropType.string,
  age:PropType.number
}
//ref={(inputEl)=>{this.inputElement=inputEl}}
export default hoc(PersonFunc,'person');
