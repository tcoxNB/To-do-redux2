import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './css/default.css';
import 'font-awesome/css/font-awesome.css'
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
