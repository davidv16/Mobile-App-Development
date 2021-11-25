import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import Data from '../services/index'
import BoardList from '../../components/BoardList/BoardList';
import data from '../../resources/data.json';
//import IBoard from '../models/IBoard'
import styles from './styles'
import AddModal from '../../components/addmodal';

/*
interface IBoard {
    id: number;
    name: string;
    thumbnailPhoto: string;
}
*/
export default function Boards() {

    const initialBoardState = {
        id: 0,
        name: '',
        thumbnailPhoto: ''
    };
    const [boards, setBoards] = useState(data.boards);

    const [isAddModalOpen, setIsAddModalOpen]= useState(false);

    useEffect(() => {
            //let data = await Data.getData();

            //setBoards({...data.boards});
            console.log(boards);
    }, [])


    return (
        <View>
            <BoardList
            onAdd= {() => setIsAddModalOpen(true)}
            boards={boards}/>
            <AddModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                takePhoto={() => {}}
                selectFromCameraRoll={()=>{}}/>
        </View>
    );
}

