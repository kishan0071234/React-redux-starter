import {createActions} from 'redux-actions'
import store from "../index";

export const rootAction=createActions({
   LOAD_SEARCH_PAGE: (payload) => payload ,
   GET_DATA_SUCCESS: (payload) =>payload,
   GET_DATA_Error: (payload) =>payload

});

export const loadSearchPage =  payload =>{
    store.dispatch(rootAction.loadSearchPage(payload));
}

export const getDataSuccess =  payload =>{
    store.dispatch(rootAction.getDataSuccess(payload));
}

export const getDataError =  payload =>{
    store.dispatch(rootAction.getDataError(payload));
}