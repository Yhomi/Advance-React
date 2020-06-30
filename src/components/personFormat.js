import React,{PureComponent} from 'react';
import ErrorBoundary from './ErrorBoundary';
import Per from './person2';

class PersonFormatter extends PureComponent{
  // static getDerivedStateFromProps(props,state){
  //   console.log('Component Update: getDerivedStateFromProps');
  // }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('Component Update: shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons){
  //     return true
  //   }else{
  //     return false
  //   }
  // }

  getSnapshotBeforeUpdate(precProps,prevState){
    console.log('Component Update: getSnapshotBeforeUpdate');
    return {message:'Snapshot'}
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('Component Update: componentDidUpdate');
    console.log(snapshot);
  }
  componentWillUnmount(){
    console.log('[Person.js]: componentWillUnmount')
  }

  render(){
    console.log('[Person.js] rendering...');
    return this.props.persons.map((ace,index)=>{
            return <ErrorBoundary key={ace.id}><Per  name={ace.name} age={ace.age}
                    click={()=>this.props.clicked(index)}
                    
                    change={e=>this.props.changed(e,ace.id)} /></ErrorBoundary>
        })
  }
}

export default PersonFormatter
