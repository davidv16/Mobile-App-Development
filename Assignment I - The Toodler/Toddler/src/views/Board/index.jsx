import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
//import {withNavigation} from 'react-navigation'



const Board = ({ route }) => {
    const [board, setBoard] = useState('');
    
    const { data } = route.params;

    useEffect(() => {
        (async () => {
            setBoard(data);
        })();
    }, []);

    return (
        <View style={styles.listItem}>
            <Text style={styles.text}>{board.name}</Text>
            <Text style={styles.text}>{board.thumbnailPhoto}</Text>
        </View>
    );
};

export default Board;
