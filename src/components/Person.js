import React,{Component} from "react";
import Peerson from './personFormat';
import '../App.css';
import Radium from 'radium';
import ErrorBoundary from './ErrorBoundary';
import CockPit from './cockpit';
import WithClass from './WithClass';
import hoc from './hoc';
import Aux from './auxiliary';

class Person extends Component{
  constructor(props){
    super(props)
    console.log('[Person.js] constructor')
  }



    state={
        persons:[
                  {id:'1',name:'Zoro',age:22},
                  {id:"2",name:'Sanji',age:21},
                  {id:'3',name:'Ussop',age:20}
                ],
        otherState:'Some other state',
        showPersons:false,
        showCockpit:true
    }

    static getDerivedStateFromProps(props,state){
      console.log('[Person.js] getDerivedStateFromProps',props);
      return state;
    }





    // clickHandler = (newName)=>{
    //     console.log('clicked')
    //     this.setState({
    //         person:[{name:newName,age:22},{name:'Sanji',age:21},{name:'Ussop',age:20}]
    //     })
    // }
    //
    // SwitchName = ()=>{
    //     console.log('clicked')
    //     this.setState({
    //         person:[{name:'Zoro',age:22},{name:'Sanji',age:21},{name:'Ussop',age:20}]
    //     })
    // }
    //
    // changeHandler = (e)=>{
    //   this.setState({
    //       person:[{name:'Zoro',age:22},{name:e.target.value,age:21},{name:'Ussop',age:20}]
    //   })
    // }

    togglePersons = ()=>{
      this.setState({
        showPersons:!this.state.showPersons
      })
    }

    deletePerson = (personIndex)=>{
      // const persons =this.state.persons.slice() // copying the persons state into persons const
      const persons = [...this.state.persons] //spread operator for copying
      persons.splice(personIndex,1)
      this.setState({persons:persons})
    }

    changeName = (e,id)=>{
      const personIndex = this.state.persons.findIndex(p=>{
        return p.id === id;
      });
      const person = {...this.state.persons[personIndex]}
      person.name=e.target.value
      const Newpersons =[...this.state.persons]
      Newpersons[personIndex]=person;
      this.setState({persons:Newpersons})
    }

    // componentWillMount(){
    //   console.log('[Person.js] componentWillMount');
    // }

    componentDidMount(){
      console.log('[Person.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps,nextState){
      console.log('[Person.js]: shouldComponentUpdate');
      return true;
    }

    componentDidUpdate(){
      console.log('[Person.js]: componentDidUpdate');
    }



    render(){
       console.log('[Person.js] render');
      let personal = null
      if(this.state.showPersons){
          personal=(
                <div>
                  <Peerson persons={this.state.persons}
                      clicked={this.deletePerson}
                      changed={this.changeName}
                  />
                </div>
          );
      }
      // const random = Math.random();
      // if(random > 0.5){
      //   throw new Error('Something is wrong')
      // }


        return(

            <Aux>
              <button onClick={()=>{this.setState({showCockpit:false})}}>Remove CockPit</button>
                {this.state.showCockpit ?<CockPit titleApp={this.props.title} personsLength={this.state.persons.length} showPersons={this.state.showPersons} toggle={this.togglePersons}  /> : null}
                {personal}
            </Aux>

        )
    }
}
export default hoc(Person,'App')
