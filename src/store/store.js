import { legacy_createStore as createStore, combineReducers } from 'redux';
import { characterReducer } from './reducers/character-reducer';
import counterReducer from './reducers/counter-reducer';

const reducer = combineReducers({

    counter: counterReducer,
    character: characterReducer

});


export const store = createStore(reducer);

export default store;