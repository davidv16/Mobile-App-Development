import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

interface Props {
    searchString: (text: string) => void
}

const Search = ({ searchString }: Props) => (
  <View
    style={styles.searchbar}
  >
    <AntDesign
      name="search1"
      size={24}
      color="black"
      style={styles.icon}
    />
    <TextInput
      style={styles.textinput}
      onChangeText={(text) => searchString(text)}
      placeholder="Search"
    />
  </View>
);

export default Search;
