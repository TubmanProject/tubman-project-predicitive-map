import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TubmanBox from './components/TubmanBox';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<TubmanBox />, document.getElementById('root'));
registerServiceWorker();
