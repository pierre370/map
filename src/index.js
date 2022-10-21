import React from 'react';

import ReactDOM from 'react-dom';
import  App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routess } from './routes'; // where we are going to specify our routes

ReactDOM.render(
    <Router>
        <Routess />
    </Router>,
    document.getElementById('root')
);
