import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../auth/useAuth';
import Firebase from '../config/firebase';
import Screen from '../components/Screen';
import HistoryCard from '../components/HistoryCard';
import ActivityIndicator from '../components/ActivityIndicator';

export default function AppointmentHistory() {
  const {userData} = useAuth();
  const [Data,setData] = useState([]);
  const db = Firebase.firestore();
  const [loading,setLoading] = useState(false);

  //Firebase Data featch
  useEffect(() => {
    setLoading(true);
    db.collection('AppUsers').doc(userData.id).collection('Appointment_History').onSnapshot(snapshot => {
        setData(snapshot.docs.map(
            doc => (
                {
                id:doc.id,
                contact_no:doc.data().contact_no,
                disease:doc.data().disease,
                email:doc.data().email,
                name:doc.data().name,
                date: String(doc.data().date)
            })))
    });
    setLoading(false);
},[]);


  return (
   <>
   <ActivityIndicator visible={loading}/>
   <Screen>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text}>Appointment History</Text>

          </View>

          {
            Data.length ? Data.map(data => {
             return <HistoryCard 
              
              key={data.id}
              name={data.name}
              date={data.date}
              contact_no={data.contact_no}
              email={data.email}

              
              />
            }) : <Text style={styles.NoAppointments}>No Appointments!</Text>
          }
        </ScrollView>
    </Screen>
   </>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:"center",
      padding:10
  },
  text:{
      fontSize:20,
      textTransform:"uppercase",
      padding:5
  },
  NoAppointments:{
    textAlign:"center",
    padding:15
  }
})