import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup";
import useAuth from "../auth/useAuth";
import Screen from '../components/Screen';
import { Form,FormField,SubmitButton,FormPicker as Picker,FormImagePicker, ErrorMessage} from '../components/Forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import colors from "../config/colors";
import ActivityIndicator from '../components/ActivityIndicator';
import Firebase, { createUserProfile } from '../config/firebase';



const validationSchema = Yup.object().shape({
  name:Yup.string().required().min(1).label("Name"),
  Contact_No:Yup.number().required().min(10).label("Contact no."),
  Address: Yup.string().required().label("Address"),
  images: Yup.array().min(1, "Please Select Atleast on Image"),
  password: Yup.string().required().min(4).label("Password")
})


export default function Registration() {
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
 
  const auth = useAuth();


  //Handle Submit
  const HandleSubmit = async({email,password,name,Contact_No,Address,images} ) => {
    try {
      setLoading(true);
      const {user} = await Firebase.auth().createUserWithEmailAndPassword(email,password);
      await createUserProfile(user,images,{name,Contact_No,Address,password});
      auth.logIn(user);
      setLoading(false);
    } catch (error) {
      setError("An unexprected error occured");
      console.log(error);
      setLoading(false);
      return;
    }
  }

  return (
    <>
    <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <ScrollView>
        <Image
          style={styles.logo}
          source={require("../assets/logo-hospital.png")}
        />
        <Form 
        initialValues={{
          name:'',
          Contact_No:"",
          Address:"",
          images:[],
          email:'',
          password:""
        }}
          onSubmit={HandleSubmit}
        validationSchema={validationSchema}
        >
            <FormImagePicker name="images" />
            <ErrorMessage error={error} />
            <FormField maxLength={255} name="name" placeholder="Your name" />
            <FormField maxLength={255} name="email" placeholder="Your Email" />
            <FormField
            keyboardType="numeric"
            maxLength={10}
            name="Contact_No"
            placeholder="Your Contact No."
          />
     
        <FormField 
            multiline
            name="Address"
            placeholder="Your Address"
            />
             <FormField 
            name="password"
            placeholder="Your Password"
            secureTextEntry={true}
            />
            <SubmitButton title="Register" />
            </Form>
        </ScrollView>
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    padding:10,
    backgroundColor:colors.gray
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf:"center"
  },
})