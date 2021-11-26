import React from 'react'
import { View, Image , Text, Pressable, TouchableOpacity} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Task = ({Tasks}) => {
    const { navigate } = useNavigation();
    return(
        <Pressable 
            onPress={() => navigate('Board', {data: Tasks})}
            // onLongPress={() => deleteBoard(board.id)}
        >
        <View style={styles.listItem}>
            <Text style={styles.text}>{Tasks.name}</Text>

            <Text style={{ color: 'blue' }}>
              <AntDesign name="edit" style={styles.icon} />
            </Text>
            <AntDesign name="rightcircle" size={24} color="black" />
            
        </View>
        </Pressable>
    );
};

export default Task;