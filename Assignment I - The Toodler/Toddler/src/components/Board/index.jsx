import React from 'react'
import { View, Image , Text, Pressable} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Board = ({board, onAdd}) => {
    const { navigate } = useNavigation();
    return(
        <Pressable 
            onPress={() => navigate('Board', {data: board})}
            onLongPress={() => onAdd()}
        >
        <View style={styles.listItem}>
            <Image
              source={{ uri: board.thumbnailPhoto }}
              style={styles.image}
            />
            <Text style={styles.text}>{board.name}</Text>
            <AntDesign name="rightcircle" size={24} color="black" />
        </View>
        </Pressable>
    );
};

export default Board