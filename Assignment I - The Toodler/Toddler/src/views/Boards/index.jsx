import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight,StyleSheet, Pressable } from 'react-native';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles'
import AddModal from '../../components/AddModal';

export default function Boards() {

    const initialBoard = {
        id: 0,
        name: '',
        description: '',
        thumbnailPhoto: 'https://images.prismic.io/indiecampers-demo/9f34856d-05da-4afb-832f-d3a36de83b7f_Hero---Kinderdijk.jpg'
    }
    const [boards, setBoards] = useState(data.boards);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    useEffect(() => {
        console.log(boards);
    }, []);

    const addBoard = (board) => {
        let nextId = Math.max(...boards.map((b) => b.id)) + 1;
        const newBoard = {
            id: nextId,
            name: board.name,
            description: board.description,
            thumbnailPhoto: board.thumbnailPhoto
        };

        setBoards([...boards, newBoard]);
        console.log(boards);
    };

    const deleteBoard = (id) => {
        const newBoards = boards.filter((board) => board.id !== id);
        setBoards([]);
        setBoards(newBoards);
    }

    return (
        <View>
            <TouchableHighlight
                style={styles.button}
                onPress={() => setIsAddModalOpen(true)}>
                <Text style={styles.buttonText}>Gallery</Text>
            </TouchableHighlight>
            <BoardList
                boards={boards}
                deleteBoard={(id) => deleteBoard(id)}
            />
            <AddModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                addBoard={(board) => addBoard(board)}
            />
        </View>
    );
}

            