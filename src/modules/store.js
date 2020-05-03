import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './root';


const middlewares = applyMiddleware(thunkMiddleware);

let devTools = [];
if (window.devToolsExtension) {
	devTools = [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];
}

// Compose enhancers
const enhancers = compose(middlewares, ...devTools);

// Store
const store = createStore(
	reducer,
	// middlewares,
	enhancers,
);

export default store;
