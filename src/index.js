import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

setInterval(tick, 1000);

function tick () {
    return (
        ReactDOM.render(
                <App />,
            document.getElementById('root')
        )
    );
}

