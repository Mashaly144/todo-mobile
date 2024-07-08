import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todoiee</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#570A57',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
