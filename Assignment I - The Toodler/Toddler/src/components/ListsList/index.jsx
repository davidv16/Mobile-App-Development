import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import List from '../List';
import styles from './styles';

const ListsList = ({ lists, data, deleteList }) => {
    return (
        <View>
            <FlatList
                numColumns={1}
                data={lists}
                renderItem={({ item }) => (
                    <List 
                        lists={item} 
                        data={data}
                        deleteList={deleteList}
                    />
                )}
                keyExtractor={lists => lists.id} />
        </View>
    );
}

export default ListsList;