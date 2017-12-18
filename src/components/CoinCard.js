import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import { images} from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex"
    },
    image: {
        width: 40,
        height: 40
    },
    bold: {
        fontWeight: "bold"
    }
});

const { container, image, bold} = styles;

const CoinCard = ({ symbol, coin_name, price_aud, percentage_change_24h, percentage_change_7d}) => {

    return(
        <View>
            <Image 
                style={styles.image} 
                source={{ uri: images[symbol]}}
            />
            <Text>{symbol}</Text>
            <Text>{coin_name}</Text>
            <Text>{price_aud} <Text style={bold}>$</Text></Text>
            <Text>{props.percentage_change_24h}</Text>
            <Text>{props.percentage_change_7d}</Text>
        </View>
    )
}

export default CoinCard;