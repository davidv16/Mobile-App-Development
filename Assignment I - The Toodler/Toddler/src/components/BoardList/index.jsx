import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Board from '../Board';
import styles from './styles';

const BoardList = ({ boards, deleteBoard, openEditModal, data }) => {
    return (
        <View>
            <FlatList
                numColumns={1}
                data={boards}
                renderItem={({ item }) => (
                    <Board 
                        board={item} 
                        deleteBoard={deleteBoard}
                        openEditModal={openEditModal}
                        data={data}
                    />
                )}
                keyExtractor={boards => boards.id} />
        </View>
    );
}

export default BoardList;
