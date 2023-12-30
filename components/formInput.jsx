import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import { Controller } from 'react-hook-form';

const FormInput = ({control, name, ...otherProps}) => {
  return (
    <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, onBlur }, fieldState: { error }})=>(
        <>
          <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          {...otherProps}
            />
            {error && <Text style={styles.errorMessage}>
                {error.message}
            </Text>
            }
        </>
        )}
      />
  )
}

export default FormInput;


const styles = StyleSheet.create({
    input:{
    borderWidth: 1,
    borderColor: "#000",
    width: '100%',
    textAlign: 'left',
    padding: 10,
    borderRadius: 10
  },
  errorMessage:{
    color: 'red', 
    alignSelf: 'stretch',
    fontSize: 12   
    }
})