import React from 'react';
import ReactDOM from 'react-dom';
import Trio from './Trio';
import registerServiceWorker from './registerServiceWorker';

import './App.css'

ReactDOM.render(<Trio />, document.getElementById('root'));
registerServiceWorker();