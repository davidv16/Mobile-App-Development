import React from 'react';
import { View, FlatList } from 'react-native';
import Task from '../Task';
import styles from './styles';

const TasksList = ({ Tasks, data }) => {
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

export default TasksList;