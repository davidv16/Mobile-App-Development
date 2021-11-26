import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles';
import listsData from '../../resources/data.json'
import ListsList from '../../components/ListsList'



const Board = ({ route }) => {
    const [board, setBoard] = useState('');
    
    const { data } = route.params;

    useEffect(() => {
        (async () => {
            setBoard(data);
        })();
    }, []);

    const listsInBoard = listsData.lists.filter((lists) => lists.boardId === data.id);
    console.log(listsInBoard)
    return (
        <View style={styles.listItem}>
            <Text style={styles.text}>{board.name}</Text>
            <Image
              source={{ uri: board.thumbnailPhoto }}
              style={styles.image}
            />
            <Text style={styles.text}>{data.id}</Text>
            <ListsList
            Lists={listsInBoard}/>
        </View>
    );
};

export default Board;
