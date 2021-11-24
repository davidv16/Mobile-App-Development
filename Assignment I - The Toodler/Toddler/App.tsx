import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Boards from './src/views/boards'

export default function App() {
  return (
    // <Boards/>
    <View style={styles.container}>
      <Boards/>
      {/* <Text>Open up App.tsx to start woking on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
