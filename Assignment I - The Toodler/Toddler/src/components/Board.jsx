import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
/*
interface Props {
    id: number;
    name: string;
    thumbnailPhoto: string;
}
*/
export default function BoardList({ board }) {
    return (
        <View>
            <Text>{board.id}</Text>
            <Text>{board.name}</Text>
            <Text>{board.thumbnailPhoto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
