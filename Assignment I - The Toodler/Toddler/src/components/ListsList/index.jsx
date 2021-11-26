import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import List from '../List';
import styles from './styles';

export default function ListsList({ Lists }) {
    return (
        <View>
            <FlatList
                numColumns={1}
                data={Lists}
                renderItem={({ item }) => (
                    <List 
                        Lists={item} 

                    />
                )}
                keyExtractor={Lists => Lists.id} />
        </View>
    );
}