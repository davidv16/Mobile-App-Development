import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles'

export default function Boards() {

    const [boards, setBoards] = useState(data.boards);

    return (
        <View>
            <BoardList boards={boards}/>
        </View>
    );
}

