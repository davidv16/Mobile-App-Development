import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles from './styles';
import listsData from '../../resources/data.json'
import ListsList from '../../components/ListsList'



const Board = ({ route }) => {
    const [board, setBoard] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    
    const { data, otherData } = route.params;

    useEffect(() => {
        (async () => {
            setBoard(data);
        })();
    }, []);

    const listsInBoard = listsData.lists.filter((lists) => lists.boardId === data.id);
    console.log(listsInBoard)
    return (
        <View style={styles.listItem}>
            <TouchableHighlight
                style={styles.button}
                onPress={() => setModalOpen(true)}>
                <Text style={styles.buttonText}>Add Board</Text>
            </TouchableHighlight>
            <Text style={styles.text}>{board.name}</Text>
            <Image
              source={{ uri: board.thumbnailPhoto }}
              style={styles.image}
            />
            <Text style={styles.text}>{data.id}</Text>
            <ListsList
            Lists={listsInBoard}
            data={otherData}/>
        </View>
    );
};

export default Board;
