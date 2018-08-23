import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import toDoReducer from '../reducers/toDoReducer';
import thunk from 'redux-thunk';


/// setting up fail over logic if we do not have the redux dev
/// tools installed! if the redux tools are not installed, 
/// compose is used
const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
|| compose;


export default () => {
    //store creation
    const store = createStore(
        combineReducers({
            toDos: toDoReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
