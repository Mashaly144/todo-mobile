// src/App.js

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

const App = () => {
  const [goal, setGoal] = useState('');
  const [AllGoals, setAllGoal] = useState([]);
  const ondGoalHandler = (goal) => {
    setGoal(goal);
  };
  const addGoalHandler = () => {
    setAllGoal((prev) => [...AllGoals, goal]);
    setGoal('');
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContent}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder='enter you goal'
            style={styles.textInput}
            onChangeText={ondGoalHandler}
          />
          <Button title='Submit' onPress={addGoalHandler} />
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
          <ScrollView>
            {AllGoals.map((goal, index) => (
              <Text key={index} style={{ ...styles.text }}>
                {goal}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#290249',
    padding: 50,
  },
  inputContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    color: '#fff',
  },
});

export default App;
