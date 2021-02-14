import {handleActions} from "redux-actions";
import  {rootAction} from "../action/rootAction"
import initialState from "./initialState"

const loadReducer=handleActions(
    new Map([
        [
             rootAction.loadSearchPage.toString(),
            (state,action)=> {
                return action.payload
            }
        ]
    ]),
    null
);

export default loadReducer;