import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Simple Login Form</Text>
      <TextInput
      placeholder='email'
      style={styles.input}
        />
      <TextInput
      placeholder='full name'
      style={styles.input}
        />
      <TextInput
      placeholder='password'
      style={styles.input}
      secureTextEntry
        />

      <Button
      title='Submit'
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

    gap: 10
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  input:{
    borderWidth: 1,
    borderColor: "#000",
    width: '100%',
    textAlign: 'left',
    padding: 10,
    borderRadius: 10
  }
});
