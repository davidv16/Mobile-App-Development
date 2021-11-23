import React from 'react';
import { View, Text  } from "react-native";
import styles from "styles";
import { BoardList  } from "../../components/boardList";
import data from "../../resources/data.json";

const Boards = () =>(
    <View style={styles.container}>
      <BoardList {...data}/> 
    </View>
  
);

export default Boards;