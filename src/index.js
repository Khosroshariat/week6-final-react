import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router } from 'react-router-dom';

library.add( faBars, faXmark )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
    <App />
</Router>
);


