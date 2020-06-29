import React,{Component} from "react";
import Peerson from './personFormat';
import '../App.css';
import Radium from 'radium';
import ErrorBoundary from './ErrorBoundary';
import CockPit from './cockpit';

class Person extends Component{

    state={
        persons:[
                  {id:'1',name:'Zoro',age:22},
                  {id:"2",name:'Sanji',age:21},
                  {id:'3',name:'Ussop',age:20}
                ],
        otherState:'Some other state',
        showPersons:false

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

    render(){
      // console.log(this.state.persons);
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

            <div className="App">
                <CockPit persons={this.state.persons} showPersons={this.state.showPersons} toggle={this.togglePersons} />
                {personal}
            </div>

        )
    }
}
export default Person
