import React from 'react';
import { View, Text, TextInput } from 'react-native';

interface Props {
    searchString: (text: string) => void
}

const Search = ({ searchString }: Props) => (
    <View>
        <TextInput
            onChangeText={(text) => searchString(text)}
        />
    </View>
);

export default Search;
