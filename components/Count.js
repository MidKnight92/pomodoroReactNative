import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Count = ({ text, status, stopSession, count }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{status ? "Rest" : "Work"}</Text>
    <Text style={styles.text}>{ count }</Text>
    <Button style={styles.button} title="Stop Session" onPress={stopSession}/>
  </View>
)

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#70a3ef'
  },
  text : {
    fontFamily: "Arial",
    fontSize: 34,
    justifyContent: 'center',
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default Count;