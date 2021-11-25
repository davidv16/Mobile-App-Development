import React from 'react'
import { View, Image , Text, Pressable} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Board = ({board /*, navigation: { navigate }*/}) => {
    const { navigate } = useNavigation();
    return(
        <Pressable onPress={() => navigate('Board', {data: board})}>
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