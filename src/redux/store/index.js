
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../modules';
import thunk from 'redux-thunk';
import * as api from '../../api';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));

export default store;