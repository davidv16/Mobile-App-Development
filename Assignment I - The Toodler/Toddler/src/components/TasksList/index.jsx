import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Task from '../Task';
import styles from './styles';

export default function TasksList({ Tasks, data }) {
    return (
        <View>
            <FlatList
                numColumns={1}
                data={Tasks}
                renderItem={({ item }) => (
                    <Task 
                        Tasks={item}
                        data={data} 

                    />
                )}
                keyExtractor={Tasks => Tasks.id} />
        </View>
    );
}