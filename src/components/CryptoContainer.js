import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Text} from 'react-native';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        
        return crypto.data.map((coin, index) =>
        <CoinCard
            key={index}
            coin_name={coin.coin_name}
            symbol={coin.symbol}
            price_aud={coin.price_aud}
            percentage_change_24h={coin.percentage_change_24h}
            percentage_change_7d={coin.percentage_change_7d}
        />
    )}

    render() {
        const {crypto} = this.props;
        return(
            <View>
                {this.renderCoinCards()}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer);