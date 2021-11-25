import React from 'react'
import { View, Text } from 'react-native'
//import {withNavigation} from 'react-navigation'



const Board = ({ route }) => {
    const { filename } = route.params;

    return (
        <View>
            <Text>Works</Text>
            
        </View>
    );
};

export default Board;
