import React from 'react';
import { View, FlatList } from 'react-native';
import List from '../List';
import styles from './styles';

const ListsList = ({ lists, data, deleteList, editList }) => {
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
                        editList={editList}
                    />
                )}
                keyExtractor={lists => lists.id} />
        </View>
    );
}

export default ListsList;