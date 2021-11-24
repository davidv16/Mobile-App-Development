import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Data from '../services/index'
import BoardList from '../components/BoardList';
//import IBoard from '../models/IBoard'

interface IBoard {
    id: number;
    name: string;
    thumbnailPhoto: string;
}

export default function Boards() {

    const initialBoardState = {
        id: 0,
        name: '',
        thumbnailPhoto: ''
    };
    const [getBoards, setBoards] = useState([]);

    useEffect(() => {
        (async () => {
            let data = await Data.getData();

            setBoards(data);
            console.log(data);
        })()
        return () => {
        }
    }, [])


    return (
        <View>
            <Text>{getBoards}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
