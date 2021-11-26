import React from 'react';
import { View, FlatList } from 'react-native';
import Task from '../Task';
import styles from './styles';

const TasksList = ({ tasks, data, deleteTask, editTask }) => {
    return (
        <View>
            <FlatList
                numColumns={1}
                data={tasks}
                renderItem={({ item }) => (
                    <Task 
                        tasks={item}
                        data={data}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                )}
                keyExtractor={tasks => tasks.id} />
        </View>
    );
}

export default TasksList;