import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
import FormInput from './components/formInput';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  full_name: z.string().min(3, 'full name must be at least 3 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      full_name: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data)=>{
    Alert.alert("Successful", JSON.stringify(data))

  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Simple Login Form</Text>

      <FormInput
      control={control}
      name={'email'}
      placeholder="email"
      />
      <FormInput
      control={control}
      name={'full_name'}
      placeholder='full name'
      />
      <FormInput
      control={control}
      name={'password'}
      placeholder='password'
      secureTextEntry
      />

      <Button
      title='Submit'
      onPress={handleSubmit(onSubmit)}
      />

    </View>
  );
}

// ...Styles below

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
