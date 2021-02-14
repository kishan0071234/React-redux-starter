import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { render } from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router,Route} from "react-router-dom";
import './assets/styles/style.sass';
import './assets/styles/style.css';
import configStore from "../src/store/configStore"
import ErrorBoundary from  './utils/ErrorBoundary'

const store=configStore();

export default store;

render(
     <Provider store={store}>
       <Router>
         <Suspense fallback={<div>Loading .....</div>}>
           <Route path="/" 
                  render ={props=>(
                           <ErrorBoundary>
                            <App  {...props}/>
                            </ErrorBoundary>
                         )}/>
      
      </Suspense>
      </Router>
      </Provider>
,
  document.getElementById("root")
);

// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
