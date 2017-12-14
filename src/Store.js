import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, createLogger());

console.log(thunk);

const Store = createStore(
    RootReducer,
    compose(
        middleware,
            devTools({
                name: Platform.OS,
                hostname: 'localhost',
                port: 5678
            })
    )
)

export default Store;