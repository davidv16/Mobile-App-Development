import React from 'react'
import { View, Image , Text, Pressable, TouchableOpacity} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TasksData from '../../resources/data.json'
import TasksList from '../../components/TasksList'



const List = ({Lists}) => {
    const { navigate } = useNavigation();
    const TasksInList = TasksData.tasks.filter((Tasks) => Tasks.listId === Lists.id);
    console.log(TasksInList)
    return(
        <Pressable 
            onPress={() => navigate('Board', {data: Lists})}
            // onLongPress={() => deleteBoard(board.id)}
        >
        <View style={styles.listItem}>
            <Text style={styles.text}>{Lists.name}</Text>

            <Text style={{ color: 'blue' }}>
              <AntDesign name="edit" style={styles.icon} />
            </Text>
            <AntDesign name="rightcircle" size={24} color="black" />
            <TasksList
            Tasks={TasksInList}
            />
            
        </View>
        </Pressable>
    );
};

export default List;