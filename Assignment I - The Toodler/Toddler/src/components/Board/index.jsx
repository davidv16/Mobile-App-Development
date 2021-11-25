import React from 'react'
import { View, Image , Text, Pressable, TouchableOpacity} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Board = ({board, deleteBoard, openEditModal}) => {
    const { navigate } = useNavigation();
    return(
        <Pressable 
            onPress={() => navigate('Board', {data: board})}
            onLongPress={() => deleteBoard(board.id)}
        >
        <View style={styles.listItem}>
            <Image
              source={{ uri: board.thumbnailPhoto }}
              style={styles.image}
            />
            <Text style={styles.text}>{board.name}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => openEditModal(board.id)}
            >
            <Text style={{ color: 'blue' }}>
              <AntDesign name="edit" style={styles.icon} />
            </Text>
            </TouchableOpacity>
            <AntDesign name="rightcircle" size={24} color="black" />
        </View>
        </Pressable>
    );
};

export default Board