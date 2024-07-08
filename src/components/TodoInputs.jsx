import { Text, View } from 'react-native';
import React, { Component } from 'react';

export default class TodoInputs extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder='enter you task'
          style={styles.textInput}
          onChangeText={ondGoalHandler}
        />
        <Button title='Submit' onPress={addGoalHandler} />
      </View>
    );
  }
}
