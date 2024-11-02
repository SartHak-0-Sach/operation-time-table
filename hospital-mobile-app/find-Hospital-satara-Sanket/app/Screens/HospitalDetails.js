import { StyleSheet, Text, View,ToastAndroid,ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import useAuth from '../auth/useAuth';
import Firebase from '../config/firebase';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
// import { Form } from 'formik';
import { FormField,Form, SubmitButton } from '../components/Forms';
import IconButton from '../components/IconButton';
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  Patient_Name: Yup.string().max(255).required('Patient Name is required'),
  Patient_Contact_No : Yup.number().required('Contact is required'),
  Patient_Disease : Yup.string().required('Disease is required'),
});


export default function HospitalDetails({navigation,route}) {
  const {name,Address,Contact_No,email,Images,id} = route.params.hospital;
  const [mainImg,setMainImg] = useState(Images[0]);
  const {userData} = useAuth();
  const db = Firebase.firestore();

  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Your Appointment Saved!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };


  const HandleSubmit = async ({Patient_Name,Patient_Contact_No,Patient_Disease,Hospital_id}) => {
        //user store db
        const dataRef =  db.collection('AppUsers').doc(userData.id).collection("RunningAppointments");
             
        dataRef.add({
          name,
          email,
          Address,
          disease : Patient_Disease,
          Contact_No,
          date : new Date()
        })
        //hospital store db
        const userRef = db.collection('hospitals').doc(id).collection('NewAppointments');
        userRef.add({
         name : Patient_Name,
         email : userData.email,
         disease : Patient_Disease,
         contact_no : Patient_Contact_No,
         Image : userData.photoUrl,
         date : new Date()
        });
        showToast();
        navigation.navigate('RunningAppointments');
  }



  return (
    <Screen>
      <ScrollView>
          <Image style={styles.image} source={{uri : mainImg}} />
          <View style={styles.detailsContainer}>
            <ScrollView horizontal>
                  <View style={styles.container}>
                    {Images.map((image) => {
                      <TouchableOpacity key={ image} onPress={() => setMainImg(image)}>
                          <Image style={styles.imageIcon} source={{uri :image}} />
                      </TouchableOpacity>
                    })}
                  </View>
            </ScrollView>
            <AppText style={styles.heading}>Hospital Name - </AppText>
          <AppText style={styles.textData}>{name}</AppText>
          <AppText style={styles.heading}>Hospital Address :- </AppText>
          <AppText style={styles.textData}>
            {Address}
          </AppText>
          <AppText style={styles.heading}>Hospital Contact :- </AppText>
          <AppText style={styles.textData}>+91 {Contact_No}</AppText>
          <AppText style={styles.heading}>Hospital Email :- </AppText>
          <AppText style={styles.textData}>{email}</AppText>
          </View>
          <View style={{padding:10}}>

            <Form initialValues={{
                 Patient_Name:'',
                 Patient_Contact_No:'',
                 Patient_Disease:'',
                 Hospital_id:id
            }}
            validationSchema={validationSchema}
            onSubmit={HandleSubmit}
            >

              <FormField
                  maxLength={255}
                  name="Patient_Name"
                  placeholder="Patient Name"
              />
              <FormField
                  maxLength={255}
                  name="Patient_Contact_No"
                  placeholder="Patient Contact"
              />
              <FormField
                  maxLength={255}
                  name="Patient_Disease"
                  placeholder="Patient Disease"
              />
              <SubmitButton title="Send To Hospital" />
            </Form>
            <View style={styles.ButtonContainer}>
        <AppText style={styles.text}>Call To Hospital - </AppText>
        <IconButton onPress={() => Linking.openURL(`tel:${Contact_No}`)} name="phone" style={{width:150,backgroundColor:'#34a8eb',marginBottom:10}} />
      </View>

          </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  imageIcon: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  heading: {
    fontWeight: "bold",
  },
  textData: {
    marginTop: 10,
    marginBottom: 10,
  },
  ButtonContainer:{
    padding:20,
    justifyContent:'center',
    alignItems:"center"
},
text:{
  textAlign:'center',
  textAlignVertical:'center',
  marginBottom:10
}
});