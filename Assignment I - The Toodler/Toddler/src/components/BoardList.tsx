import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import IBoard from '../models/IBoard';
import Board from './Board';

interface Props {
    id: number;
    name: string;
    thumbnailPhoto: string;
}

export default function BoardList({ boards }: IBoard) {
    return (
        <View>
            <FlatList
                numColumns={1}
                data={boards}
                renderItem={(boards) => (
                    <Board board={boards} />
                )}
                keyExtractor={boards => boards.id} />
        </View>
    );
}

const styles = StyleSheet.create({});
