import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducer/index'
import analyticsManagerMiddleware from "../middleware/analyticsManagerMiddleware";


export default function configureStore(preloadedState){
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            analyticsManagerMiddleware,
            reduxImmutableStateInvariant()
        )
    )
}