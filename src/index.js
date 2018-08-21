import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Root from './Root';
import { store, history } from './ConfigureStore';


ReactDOM.render(<Root store = {store} history = {history} />, document.getElementById('app'));
