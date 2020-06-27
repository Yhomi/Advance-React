import React, {useState} from 'react';
import Person from './person2';
import '../App.css';

const People = ()=>{
    const [personState,setPersonsState]=useState({
        person:[{name:'Ace',age:24},{name:'Sabo',age:23},{name:'Luffy',age:22}],
        otherState:'Some other state'
    })
console.log(personState)
    const switchName=()=>{
        setPersonsState({
            person:[{name:'Zoro',age:22},{name:'Sanji',age:21},{name:'Ussop',age:20}],
            otherState:personState.otherState
        })
        console.log(personState)
    }

    return(
        <div>
            <Person name={personState.person[0].name} age={personState.person[0].age} />
            <Person name={personState.person[1].name} age={personState.person[1].age} />
            <Person name={personState.person[2].name} age={personState.person[2].age}>
                hobbies: Eating
            </Person>
            <button onClick={switchName}>Switch Name</button>
        </div>
    )
}
export default People