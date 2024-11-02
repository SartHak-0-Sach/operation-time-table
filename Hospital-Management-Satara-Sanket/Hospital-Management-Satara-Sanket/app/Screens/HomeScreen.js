import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../auth/useAuth'
import Firebase from '../config/firebase';
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Card from '../components/Card';
import { AntDesign } from "@expo/vector-icons";


export default function HomeScreen({navigation}) {

  const [appointments,setAppointments] = useState([]);
  const [loading,setLoading] = useState(false);
  const {userData} = useAuth();
  const db = Firebase.firestore();


  useEffect(() => {
    setLoading(true);
    db.collection('hospitals').doc(userData.id).collection('NewAppointments').onSnapshot(snapshot => {
      setAppointments(snapshot.docs.map(
        doc => (
          { id:doc.id,
             contact_no:doc.data().contact_no,
              disease:doc.data().disease,
              email:doc.data().email,
              name:doc.data().name,
              image:doc.data().Image}
        )
      ))
    })

    setLoading(false);
  },[])

  return (
    <>
    <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
      <ScrollView style={styles.scroll}>
            {
              appointments.length ? appointments.map(Appointment => (
                  <Card 
                    key={Appointment.id}
                    id={Appointment.id}
                    image={Appointment.image}
                    name={Appointment.name}
                    email={Appointment.email}
                    disease={Appointment.disease}
                    phone_no={Appointment.contact_no}
                    navigation={navigation}
                  
                  />
              )) : <AppText style={styles.text}>No Appointment found</AppText>
            }
        </ScrollView>
        <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.profileButton}>
              <AntDesign name='user'size={30} color="white" />
        </TouchableOpacity>
      </Screen>
    
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileButton: {
    height: 70,
    width: 70,
    bottom:0,
    right:10,
    backgroundColor: "#1DA1F2",
    position: "absolute",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent:'center',
    margin:20,
    borderRadius:50,
    elevation:10
  },
  text:{
    textAlign:'center'
  },
  scroll:{
    height:"100%",
    width:"100%"
  }
})