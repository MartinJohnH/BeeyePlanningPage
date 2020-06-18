import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from "./reducers/index";
import * as serviceWorker from './serviceWorker';
import './stylesheets/imports.scss';
import  '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
//pages
import HomePage from './pages/HomePage';

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route component=""/>
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
