import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import router from './router/router.config';
import { BrowserRouter,Switch,Redirect } from 'react-router-dom';
import RouteWrapper from './components/RouteWrapper'
import { Form } from 'antd';
import 'antd/dist/antd.css';

ReactDOM.render( 
    <BrowserRouter>
        <Switch>
            <Redirect exact from='/' to='/index/sateModelManage'></Redirect>
            <RouteWrapper routes={router.routes}></RouteWrapper>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();