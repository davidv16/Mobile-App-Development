import React from 'react'
import { View, Image , Text } from 'react-native'
//import styles from 'styles'


export default function Board ({board}){
    return(
        <View>
            <Text>${board.name}</Text>
            <Image
                style={styles.image}
                source={{uri: board.thumbnailPhoto}}/>
        </View>
    );
}