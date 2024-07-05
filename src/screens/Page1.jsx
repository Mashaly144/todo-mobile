// src/screens/Page1.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Page1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray background
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008080', // Teal color
  },
});

export default Page1;
