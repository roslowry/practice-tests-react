import {setMammal} from '../action-creators/actions';
import {setBird} from '../action-creators/actions';
import {setFish} from '../action-creators/actions';
import store from '../index'

const initialState = {
    selectedMammal : "Tiger",
    selectedBird : "Eagle",
    selectedFish : "Seahorse",
    mammals: ['Tiger', 'Panda', 'Pig'],
    birds: ['Eagle', 'Flamingo', 'Penguin'],
    fish: ['Seahorse', 'Octopus', 'Stingray']
  };

// make sure you understand the parameters here!
	// with any reducer we expect 2 arguments
	// we are able to give a default value to a parameter in the way seen below
export default function reducer (state = initialState, action) {
  // let newState = Object.assign({}, state)
  switch (action.type) {
    case 'SET_MAMMAL':
      return Object.assign({}, state, {selectedMammal: action.animal})
    case 'SET_BIRD':
      return Object.assign({}, state, {selectedBird: action.animal})
    case 'SET_FISH':
      return Object.assign({}, state, {selectedFish: action.animal})
    default:
      return state
  }

};

// export default reducer;
