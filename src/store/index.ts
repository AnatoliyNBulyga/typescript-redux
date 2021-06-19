import { rootReducer } from './redusers/index';
import { userReducer } from './redusers/userReducer';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));