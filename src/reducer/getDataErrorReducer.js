import {handleActions} from "redux-actions";
import  {rootAction} from "../action/rootAction"
import initialState from "./initialState"

const getDataErrorReducer=handleActions(
    new Map([
        [
             rootAction.getDataError.toString(),
            (state,action)=> {
                return action.payload
            }
        ]
    ]), 
    null
);

export default getDataErrorReducer;