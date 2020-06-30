import React,{Component} from 'react';

const withCount = (OriginalComponent)=>{
  class NewComponent extends Component{
    state={
      count:0
    }

  incrementCount = ()=>{
    console.log('action');
    this.setState(prevState=>{
        return {count:prevState.count + 1}
    })
  }
    render(){
      return <OriginalComponent count={this.state.count} increment={this.incrementCount} />
    }
  }
  return NewComponent
}
export default withCount
