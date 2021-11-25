import React from 'react'
import { View, Image , Text, Pressable} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import {withNavigation} from 'react-navigation'


const Board = ({board, navigation: { navigate }, onadd}) => {
    return(
        <Pressable 
            onPress={() => navigate('Board')}
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

export default withNavigation(Board)