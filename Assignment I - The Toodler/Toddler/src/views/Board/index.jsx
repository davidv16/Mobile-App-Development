import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles from './styles';
import ListsList from '../../components/ListsList';
import AddList from '../../components/AddList';



const Board = ({ route }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    
    const { board, otherData } = route.params;
    const listsInBoard = otherData.lists.filter((lists) => lists.boardId === board.id);

    const [lists, setLists] = useState(listsInBoard);



    const addList = (list) => {
        let nextId = Math.max(...lists.map((b) => b.id)) + 1;
        const newList = {
            id: nextId,
            name: list.name,
            color: list.color,
            boardId: board.id
        };

        setLists([...lists, newList]);
        
    };

    

    return (
        <View style={styles.listItem}>
            <TouchableHighlight
                style={styles.button}
                onPress={() => setIsAddModalOpen(true)}>
                <Text style={styles.buttonText}>Add List</Text>
            </TouchableHighlight>
            <Text style={styles.text}>{board.name}</Text>
            <Image
              source={{ uri: board.thumbnailPhoto }}
              style={styles.image}
            />
            <Text style={styles.text}>{board.id}</Text>
            <ListsList
            Lists={lists}
            data={otherData}/>
            <AddList
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                addList={(list) => addList(list)}
            />
        </View>
    );
};

export default Board;
