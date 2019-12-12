import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from './providers/UserProvider';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, }from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <UserProvider>
        <BrowserRouter>
            <App />, 
        </BrowserRouter>
    </UserProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
