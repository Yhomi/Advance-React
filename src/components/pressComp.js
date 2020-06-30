import React,{Component} from 'react';
import withCount from './countHoc'

class Press extends Component{

  render(){
    return(
      <div>
          <input type="text" onKeyDown={this.props.increment} />
          <h1>Key Press {this.props.count} times</h1>
      </div>
    )
  }
}
export default withCount(Press)
