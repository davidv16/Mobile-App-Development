import React from "react";
import { View, Text, FlatList } from "react-native";


const BoardList = ({ boards}) => {
  <View>
    <FlatList
      numColumns={1}
      data = {boards}
      renderItem ={({boards}) =>(
        <board{...boards}/>
      )}
      keyExtractor={boards => boards.id} />
  </View>
}
export default BoardList;
