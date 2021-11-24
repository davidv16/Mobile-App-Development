import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import Data from '../services/index'
import BoardList from '../components/BoardList';
import data from '../resources/data.json';
//import IBoard from '../models/IBoard'

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

    useEffect(() => {
            //let data = await Data.getData();

            //setBoards({...data.boards});
            console.log(boards);
    }, [])


    return (
        <View>
            <BoardList {...boards}/>
        </View>
    );
}

const styles = StyleSheet.create({});
