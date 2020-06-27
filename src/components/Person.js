import React,{Component} from "react";
import Per from './person2';
import '../App.css';
import Radium,{StyleRoot} from 'radium';

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

      const btn={
        backgroundColor:'green',
        border:'1px solid #fff',
        color:'white',
        padding:'16px',
        marginTop:'10px',
        ':hover':{
          backgroundColor:'lightgreen',
          color:'black'
        }
      }

      if(this.state.showPersons){
          personal=(
                <div>
                      {this.state.persons.map((ace,index)=>{
                          return (<Per key={ace.id} name={ace.name} age={ace.age}
                                  click={()=>this.deletePerson(index)}
                                  change={e=>this.changeName(e,ace.id)} />)
                      })}
                </div>
          );
          btn.backgroundColor='red'
          btn[':hover']={
            backgroundColor:'yellow',
            color:'blue'
          }
      }
      const classes=[]
      if(this.state.persons.length <=2){
        classes.push('red') //classes=['red']
      }
      if(this.state.persons.length <=1){
        classes.push('bold') //classes=['red','bold']
      }

        return(
          <StyleRoot>
            <div className="App">
              <h1>Hello from React World</h1>
              <p className={classes.join(' ')}>Chrome debugger is powerful</p>
              {/*<button style={btn} onClick={this.SwitchName}>Switch Name</button>*/}
              <button style={btn} onClick={this.togglePersons}>Toggle Person</button>
                {personal}
            </div>
          </StyleRoot>
        )
    }
}
export default Radium(Person)
