import React,{Component} from "react";
import Per from './person2';
import '../App.css';


class Person extends Component{

    state={
        persons:[{id:'ab1',name:'Zoro',age:22},{id:"ac2",name:'Sanji',age:21},{id:'ad3',name:'Ussop',age:20}],
        otherState:'Some other state',
        showPersons:false

    }
    clickHandler = (newName)=>{
        console.log('clicked')
        this.setState({
            person:[{name:newName,age:22},{name:'Sanji',age:21},{name:'Ussop',age:20}]
        })
    }
    SwitchName = ()=>{
        console.log('clicked')
        this.setState({
            person:[{name:'Zoro',age:22},{name:'Sanji',age:21},{name:'Ussop',age:20}]
        })
    }
    changeHandler = (e)=>{
      this.setState({
          person:[{name:'Zoro',age:22},{name:'Sanji',age:21},{name:'Ussop',age:20}]
      })
    }
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
    changeName = (event,id)=>{
      const personIndex = this.state.persons.findIndex(p=>{
        return p.id ===id
      });
      const person = {...this.state.persons[personIndex]}
      person.name=event.target.value
      const persons ={...this.state.persons}
      persons[personIndex]=person;
      this.setState({persons:persons})
    }
    render(){
      let personal
      if(this.state.showPersons){
        // persons=(
        //   <div>
        //     <Per name={this.state.person[0].name} age={this.state.person[0].age} click={this.clickHandler.bind(this,'WhiteBeard')} />
        //      <Per name={this.state.person[1].name} age={this.state.person[1].age} click={()=>this.clickHandler('Kaido')} change={this.changeHandler} />
        //      <Per name={this.state.person[2].name} age={this.state.person[2].age} click={this.clickHandler.bind(this,'Shanks')} >
        //          Hobbies: Reading
        //      </Per>
        //  </div>)
          personal=(
                <div>
                    {
                      this.state.persons.map((peerson,index)=>{
                          return <Per key={peerson.id} name={peerson.name} age={peerson.age}
                                  click={()=>this.deletePerson(index)}
                                  change={(event)=>this.changeName(event,peerson.id)} />
                      })
                    }
                </div>
          );


      }
      const btn={
        backgroundColor:'#ccc',
        border:'1px solid #fff',
        color:'#333',
        padding:'16px',
        marginTop:'10px'
      }
        return(
            <div className="App">
              {/*<button style={btn} onClick={this.SwitchName}>Switch Name</button>*/}
              <button style={btn} onClick={this.togglePersons}>Toggle Person</button>
              {personal}

                {/*
                <Per name={this.state.person[0].name} age={this.state.person[0].age} click={this.SwitchName} />
                 <Per name={this.state.person[1].name} age={this.state.person[1].age} click={this.SwitchName} />
                 <Per name={this.state.person[2].name} age={this.state.person[2].age} click={this.SwitchName} >
                     Hobbies: Reading
                 </Per>
                 */}


            </div>
        )
    }
}
export default Person
