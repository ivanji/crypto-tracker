import React from 'react';
import { View, Text} from 'react-native';
import Coin from './coin';

const CoinList = (props) => {
    return(
        <View>


                {
                    props.cryptoList.map(crypto =>
                        <Coin key={crypto.id} {...crypto} />
                    )
                }

        </View>
    )
};

export default CoinList;