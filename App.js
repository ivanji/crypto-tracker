import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/Store';
import { Header, CryptoContainer } from './src/components';
import {fetchCoinData} from "./src/Actions/FetchCoinData";

const store = configureStore();
store.dispatch( fetchCoinData());

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View>
                    <Header />
                    <CryptoContainer />
                </View>
            </Provider>
        );
    }
}