import { createStore, combineReducers ,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import createLogger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router'; 
import reducers from './store/Reducers';

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const rootReducer = connectRouter(history)( combineReducers(reducers));

const configureStore = () => {

    const middlewares = [thunk, routeMiddleware];
    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(createLogger);
    }
    return createStore(rootReducer, applyMiddleware(...middlewares));
};
 
const store = configureStore();

export { store, history };