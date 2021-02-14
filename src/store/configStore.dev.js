import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducer/index'


export default function configureStore(preloadedState){
    debugger;
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            reduxImmutableStateInvariant()
        )
    )
}