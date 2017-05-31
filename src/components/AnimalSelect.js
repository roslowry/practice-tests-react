import React, { Component } from 'react';
import store from '../store';
import {setMammal} from '../store/action-creators/actions'
console.log('here is the store', store)
// exporting the constructor function (dumb component).
// what is the parameter coming in here?
// export default function AnimalSelect (props) {
//   console.log('here are my props', props.animals)
//   console.log('animals map',
//   props.animals.map(function(animal) {
//       return <option>{animal}</option>
// }))
//
// };

// function onChange (event) {
//
// }

//
// function onChange (event) {
//     const selectedAnimal = event.target.value;
//
//
// }
//


export default function AnimalSelect (props) {


  // let key = 1
  // have to include a submit function
  return (
    <form onSubmit={function(){props.handleSubmit()}}>
      <label>Select an Animal: </label>
      <select onChange={function(event){props.submitAnimal(event.target.value)}}>
      {
        props.animals.map(function(animal, index){
          return (
              <option key={animal}>{animal}</option>
          )
        })
      }
    <button type="button">Submit me</button>
    </select>
    </form>
  )
}
