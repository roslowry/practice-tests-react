import {createStore} from 'redux';
import mainReducer from './reducers/main';

console.log('mainReducer log', typeof mainReducer)
export default createStore(mainReducer);
