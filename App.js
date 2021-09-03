import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image, Platform, SafeAreaView, Alert, Button, StatusBar } from 'react-native';

export default function App() {
  console.log(require('./assets/icon.png'));
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" 
      onPress={() => Alert.prompt("my title", "my message", text => console.log(text))}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
