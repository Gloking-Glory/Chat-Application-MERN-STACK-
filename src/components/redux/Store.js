import { createStore, applyMiddleware } from 'redux';
import { currentChat } from './Reducer';
import thunk from 'redux-thunk';

const myStore = createStore(currentChat, applyMiddleware(thunk));

export default myStore;