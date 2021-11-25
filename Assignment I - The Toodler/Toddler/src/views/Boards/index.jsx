import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight,StyleSheet, Pressable } from 'react-native';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles'
import AddModal from '../../components/AddModal';
import EditModal from '../../components/EditModal';

export default function Boards() {

    const initialBoard = {
        id: 0,
        name: '',
        description: '',
        thumbnailPhoto: 'https://images.prismic.io/indiecampers-demo/9f34856d-05da-4afb-832f-d3a36de83b7f_Hero---Kinderdijk.jpg'
    }
    const [boards, setBoards] = useState(data.boards);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editId, setEditId] = useState(0);

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

    const openEditModal = (id) => {
        setIsEditModalOpen(true);
        setEditId(id);
    }

    const editBoard = (board) => {
        console.log(boards.filter((board) => board.id === editId)[0])
        
    }

    return (
        <View>
            <TouchableHighlight
                style={styles.button}
                onPress={() => setIsAddModalOpen(true)}>
                <Text style={styles.buttonText}>Add Board</Text>
            </TouchableHighlight>
            <BoardList
                boards={boards}
                deleteBoard={(id) => deleteBoard(id)}
                openEditModal={(id) => openEditModal(id)}
            />
            <AddModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                addBoard={(board) => addBoard(board)}
            />
            <EditModal
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                editBoard={(board) => editBoard(board)}
                
                
            />
        </View>
    );
}

            