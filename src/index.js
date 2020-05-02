import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppOfProject01 from './AppOfProject01.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <AppOfProject01/>
    </div>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
