import React,{Component} from 'react';

class Press extends Component{
  state={
    count:0
  }

handlePress = ()=>{
  this.setState(prevState=>{
      return {count:prevState.count + 1}
  })
}
  render(){
    return(
      <div>
          <input type="text" onKeyDown={this.handlePress} />
          <h1>Key Press {this.state.count} times</h1>
      </div>
    )
  }
}
export default Press
