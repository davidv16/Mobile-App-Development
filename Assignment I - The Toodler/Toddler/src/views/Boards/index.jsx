import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles'
import AddBoard from '../../components/AddBoard';

const Boards = () => {
    const initialBoard = {
        id: 0,
        name: '',
        description: '',
        thumbnailPhoto: ''
    };

    const [boards, setBoards] = useState(data.boards);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState(initialBoard);

    const addEditBoard = (board) => {
        if (selectedBoard.id === 0) {
            //CREATE
            board.id = Math.max(...boards.map((b) => b.id)) + 1;
            setBoards([...boards, board]);
        } else {
            //EDIT
            board.id = selectedBoard.id;
            setBoards([...boards.filter(x => x.id !== selectedBoard.id), board]);
      }
    }

    const editBoard = (board) => {
        setSelectedBoard(board);
        setIsAddModalOpen(true);
      }

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
                <Text style={styles.buttonText}>Add Board</Text>
            </TouchableHighlight>
            <BoardList
                boards={boards}
                deleteBoard={(id) => deleteBoard(id)}
                data={data}
                editBoard={(board) => editBoard(board)}
            />
            <AddBoard
                board={boards}
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                addEditBoard={(board) => addEditBoard(board)}
                selectedBoard={selectedBoard}
            />
        </View>
    );
}

export default Boards;
            