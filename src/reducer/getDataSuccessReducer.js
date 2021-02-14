import {handleActions} from "redux-actions";
import  {rootAction} from "../action/rootAction"
import initialState from "./initialState"

const getDataSuccessReducer=handleActions(
    new Map([
        [
             rootAction.getDataSuccess.toString(),
            (state,action)=> {
                return action.payload
            }
        ]
    ]), 
    null
);

export default getDataSuccessReducer;