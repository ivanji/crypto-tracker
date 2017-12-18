import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


import {bindActionCreators} from 'redux';
import * as fetchCoinData from './../Actions/FetchCoinData';
//import CoinCard from './CoinCard';
import CoinList from './CoinList';

class CryptoContainer extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        //const { crypto } = this.props;
        const { contentContainer } = styles;

        /*if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }*/

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                <CoinList test="test" name="This is the name" cryptoList={this.props.crypto.crypto}/>
            </ScrollView>
        )


    }
}


const styles = {
    contentContainer: {
        paddingBottom :100,
        paddingTop: 55
    }
};

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

function mapDispatchToProps(dispatch) {
    return {
        renderCoinCards: bindActionCreators(fetchCoinData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer);