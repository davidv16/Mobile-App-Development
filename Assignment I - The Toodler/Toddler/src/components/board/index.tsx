import React from 'react'
import { View, Image , Text } from 'react-native'
import styles from 'styles'


export default function Board ({boards}){
    return(
        <View>
            <Text>${boards.name}</Text>
            <Image
                style={styles.image}
                source={{uri:String ${boards.thumbnailPhoto}}}/>
        </View>
    );
}