import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App type="pro" name="Developer"  />, document.getElementById('main'));
registerServiceWorker();
