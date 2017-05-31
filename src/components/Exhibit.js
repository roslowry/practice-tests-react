import React, {Component} from 'react';
import AnimalSelect from './AnimalSelect';
import {setMammal} from '../store/action-creators/actions'
import store from '../store';

import Cage from './Cage';


export default class Exhibit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedAnimal: props.selectedAnimal
      // animals: props.animals
    };
    this.setAnimal = this.setAnimal.bind(this);
    this.dispatchAnimal = this.dispatchAnimal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(function(){
      this.setState(store.getState())
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  setAnimal(animal) {
    // store.dispatch(setMammal(animal))
    this.setState({ selectedAnimal: animal })

  }

  dispatchAnimal(animal) {
    store.dispatch(animal)
  }


  handleSubmit () {
    console.log('i am tryng to dispatch; here is my selected animal', this.state.selectedAnimal)
    store.dispatch(setMammal(this.state.selectedAnimal))
  }





  render () {
  	return (
	    <div className="exhibit">
        <Cage selectedAnimal={this.state.selectedAnimal} />
        <AnimalSelect animals ={this.props.animals} submitAnimal={this.setAnimal} handleSubmit={this.handleSubmit}/>
	    </div>
  		)
  }
};
