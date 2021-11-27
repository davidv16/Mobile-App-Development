import React from 'react';
import { View, FlatList } from 'react-native';
import Board from '../Board';
import styles from './styles';

const BoardList = ({ boards, deleteBoard, data, editBoard }) => {
    return (
        <View>
            <FlatList
                numColumns={1}
                data={boards}
                renderItem={({ item }) => (
                    <Board 
                        board={item} 
                        deleteBoard={deleteBoard}
                        editBoard={editBoard}
                        data={data}
                    />
                )}
                keyExtractor={board => board.id} />
        </View>
    );
}

export default BoardList;
