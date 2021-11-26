import React, {useState} from 'react'
import { View, TouchableOpacity , Text, Pressable, TouchableHighlight} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TasksList from '../../components/TasksList';
import AddTask from '../AddTask';

const List = ({lists, data, deleteList, editList}) => {
    const { navigate } = useNavigation();

    const initialTask = {
        id: 0,
        name: '',
        description: '',
        isFinished: false,
    };

    const tasksInList = data.tasks.filter((Tasks) => Tasks.listId === lists.id);

    const [tasks, setTasks] = useState(tasksInList);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(initialTask);

    const addEditTask = (task) => {
        if (selectedTask.id === 0) {
            //CREATE
            task.id = Math.max(...tasks.map((b) => b.id)) + 1;
            setTasks([...tasks, task]);
            setSelectedTask(initialTask);
        } else {
            //EDIT
            setTasks([...tasks.filter(x => x.id !== selectedTask.id), task]);
            setSelectedTask(initialTask);
      }
    }

    const editTask = (task) => {
        setSelectedTask(task);
        setIsAddModalOpen(true);
      }

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks([]);
        setTasks(newTasks);
    }

    return(
        <Pressable 
            onPress={() => navigate('Board', {data: lists})}
            onLongPress={() => deleteList(lists.id)}
        >
        <View style={styles.listItem}>
            <Text style={styles.text}>{lists.name}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => editList(lists)}
            >
            <Text style={{ color: 'blue' }}>
              <AntDesign name="edit" style={styles.icon} />
            </Text>
            </TouchableOpacity>
            <AntDesign name="rightcircle" size={24} color="black" />
            <TouchableHighlight
                style={styles.button}
                onPress={() => setIsAddModalOpen(true)}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableHighlight>
            <TasksList
                tasks={tasks}
                data={data}
                deleteTask={(id) => deleteTask(id)}
                editTask={(task) => editTask(task)}
            />
            <AddTask
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                addEditTask={(task) => addEditTask(task)}
                selectedTask={selectedTask}
            />
            
        </View>
        </Pressable>
    );
};

export default List;