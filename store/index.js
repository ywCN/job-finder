// This is redux store
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = create(reducers, {}, compose(applyMiddleware(thunk)));

export default store;
