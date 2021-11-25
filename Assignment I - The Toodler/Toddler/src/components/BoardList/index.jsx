import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Board from '../Board';
import styles from './styles';
export default function BoardList({ boards, onAdd }) {
    return (
        <View>
            <FlatList
                numColumns={1}
                data={boards}
                renderItem={({ item }) => (
                    <Board 
                        board={item} 
                        onAdd={onAdd}
                    />
                )}
                keyExtractor={boards => boards.id} />
        </View>
    );
}
