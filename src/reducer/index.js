import {combineReducers} from "Redux";
import loader from "./loadReducer";
import getDataSuccess from "./getDataSuccessReducer";
import getDataError from "./getDataErrorReducer";

const rootReducer=combineReducers({
   
    loader,
    getDataSuccess,
    getDataError
});

export default rootReducer;