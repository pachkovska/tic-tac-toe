import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(thunk)),
// );

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;