import React from 'react'
import { View, Text, Pressable, TouchableOpacity} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Task = ({tasks, deleteTask, editTask}) => {
    const { navigate } = useNavigation();
    return(
        <Pressable 
            onPress={() => navigate('Board', {data: tasks})}
            onLongPress={() => deleteTask(tasks.id)}
        >
        <View style={styles.listItem}>
            <Text style={styles.text}>{tasks.name}</Text>

            <TouchableOpacity
                
                onPress={() => editTask(tasks)}
            >
            <Text style={{ color: 'blue' }}>
              <AntDesign name="edit" style={styles.icon} />
            </Text>
            </TouchableOpacity>
            <AntDesign name="check" size={24} color="green" />
            
        </View>
        </Pressable>
    );
};

export default Task;