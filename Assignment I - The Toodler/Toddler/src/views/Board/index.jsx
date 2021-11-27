import React, { useState } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles from './styles';
import ListsList from '../../components/ListsList';
import AddList from '../../components/AddList';

const Board = ({ route }) => {
    const initialList = {
        id: 0,
        name: '',
        color: '',
        boardId: 0
    };
    const { board, otherData } = route.params;
    
    const listsInBoard = otherData.lists.filter((lists) => lists.boardId === board.id);
    
    const [lists, setLists] = useState(listsInBoard);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedList, setSelectedList] = useState(initialList);

    const addEditList = (list) => {
        if (selectedList.id === 0) {
            //CREATE
            list.id = Math.max(...lists.map((b) => b.id)) + 1;
            setLists([...lists, list]);
        } else {
            //EDIT
            list.id = selectedList.id;
            setLists([...lists.filter(x => x.id !== selectedList.id), list])
      }
    }

    const editList = (list) => {
        setSelectedList(list);
        setIsAddModalOpen(true);
      }

    const deleteList = (id) => {
        const newLists = lists.filter((list) => list.id !== id);
        setLists([]);
        setLists(newLists);
    }

    

    return (
        <View style={styles.listItem}>
            <Image
              source={{ uri: board.thumbnailPhoto }}
              style={styles.image}
            />
            <Text style={styles.boardTitle}>{board.name}</Text>
            <TouchableHighlight
                style={styles.button}
                onPress={() => setIsAddModalOpen(true)}>
                <Text style={styles.buttonText}>Add List</Text>
            </TouchableHighlight>
            <ListsList
                lists={lists}
                data={otherData}
                deleteList={(id) => deleteList(id)}
                editList={(list) => editList(list)}
            />
            <AddList
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                addEditList={(list) => addEditList(list)}
                selectedList={selectedList}
            />
        </View>
    );
};

export default Board;
