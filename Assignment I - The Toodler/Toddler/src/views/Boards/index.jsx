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

    useEffect(() => {
        console.log(boards);
    }, []);

    const addBoard = () => {

        let nextId = Math.max(...boards.map((b) => b.id)) + 1;
        const newBoard = {
            id: nextId,
            name: 'asdfasdf',
            description: 'board.description',
            thumbnailPhoto: 'https://images.prismic.io/indiecampers-demo/9f34856d-05da-4afb-832f-d3a36de83b7f_Hero---Kinderdijk.jpg'
        };

        setBoards([...boards, newBoard]);
        console.log(boards);
    };

    return (
        <View>
            <TouchableHighlight
                style={styles.button}
                onPress={() => addBoard()}>
                <Text style={styles.buttonText}>Gallery</Text>
            </TouchableHighlight>
            <BoardList 
                onAdd= {() => setIsAddModalOpen(true)}
                boards={boards}
            />
            <AddModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                takePhoto={() => {}}
                selectFromCameraRoll={()=>{}}/>
        </View>
    );
}

            