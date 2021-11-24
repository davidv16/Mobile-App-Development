import React from 'react'
import { View, Image , Text } from 'react-native'
import styles from './styles'


export default function Board ({board}){
    return(
        <View>
            <Text>{board.name}</Text>
            <Image
              source={{ uri: board.thumbnailPhoto }}
              style={styles.image}
            />
        </View>
    );
}