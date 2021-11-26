import React from 'react'
import { View, Image , Text, Pressable, TouchableHighlight} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TasksList from '../../components/TasksList'



const List = ({lists, data, deleteList}) => {
    const { navigate } = useNavigation();
    const TasksInList = data.tasks.filter((Tasks) => Tasks.listId === lists.id);
    return(
        <Pressable 
            onPress={() => navigate('Board', {data: lists})}
            onLongPress={() => deleteList(lists.id)}
        >
        <View style={styles.listItem}>
            <Text style={styles.text}>{lists.name}</Text>

            <Text style={{ color: 'blue' }}>
              <AntDesign name="edit" style={styles.icon} />
            </Text>
            <AntDesign name="rightcircle" size={24} color="black" />
            <TouchableHighlight
                style={styles.button}
                onPress={() => setIsAddModalOpen(true)}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableHighlight>
            <TasksList
            Tasks={TasksInList}
            data={data}
            />
            
        </View>
        </Pressable>
    );
};

export default List;