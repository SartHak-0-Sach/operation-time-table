import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextInput from '../TextInput'
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

export default function FormField({name,width,...otherProps}) {
    const {setFieldTouched,handleChange,errors,touched} = useFormikContext();
  return (
    <>

        <TextInput 
            onChangeText={handleChange(name)}
            onBlur={() => setFieldTouched(name)}
            width={width}
            {...otherProps}
        />

        <ErrorMessage error={errors[name]} visible={touched[name]} />
    
    </>
  )
}

const styles = StyleSheet.create({})