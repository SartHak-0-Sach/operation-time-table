import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik';
import Picker from '../Picker';
import ErrorMessage from './ErrorMessage';

export default function FormPicker({items,name,placeholder,PickerItemComponent,width,numberOfColumns}) {
    const {errors,setFieldValue,touched,values} = useFormikContext();
  return (
    <>

        <Picker 
             items={items}
             onSelectItem={(item) => setFieldValue(name,item)}
             placeholder={placeholder}
             selectedItem={values[name]}
             PickerItemComponent={PickerItemComponent}
             width={width}
             numberOfColumns={numberOfColumns}
        />
    {errors && (<ErrorMessage error={errors[name]} visible={touched[name]} />)}
    </>
  )
}

const styles = StyleSheet.create({})