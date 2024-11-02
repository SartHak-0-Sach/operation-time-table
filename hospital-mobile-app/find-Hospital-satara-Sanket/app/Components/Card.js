import { StyleSheet, Text, View, Image,ToastAndroid,Linking } from "react-native";
import React from "react";
import useAuth from "../auth/useAuth";
import AppText from "./AppText";
import IconButton from "./IconButton";
import Firebase from "../config/firebase";
import colors from "../config/colors";

export default function Card({
  name,
  disease,
  image,
  phone_no,
  email,
  id,
  navigation,
}) {
  const { userData } = useAuth();


  //Handle check for accept appointment
  const HandleCheck = async () => {
    const userRef = Firebase.firestore().collection('hospitals').doc(userData.id).collection('Running_Appointments');

    try{
            userRef.add({
                name,
        disease,
        image,
        phone_no,
        email
            });
            ToastAndroid.show("Data Added Successfully",ToastAndroid.SHORT);

    }catch(err){
        console.log(err);
    }
    HandleDelete();
    navigation.navigate('RunningAppointments');
  }

  const HandleDelete = async () => {
    await Firebase.firestore().collection('hospitals').doc(userData.id).collection('NewAppointments').doc(id).delete();
  }



  return (
    <View style={styles.card}>
      <View style={styles.firstContainer}>
        <View style={styles.LogoContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.dataContainer}>
          <AppText style={styles.patientAppText}>Name :- {name}</AppText>
          <AppText style={styles.patientAppText}>
            Contact No :- {phone_no}
          </AppText>
          <AppText style={styles.patientAppText}>Disease :- {disease}.</AppText>
          <AppText style={styles.patientAppText}>Email :- {email}</AppText>
        </View>

      </View>

        <View style={styles.ButtonContainer}>
                <IconButton 
                onPress={HandleCheck}
                name="check" style={{backgroundColor:'#34eb49'}}/>
                <IconButton
                onPress={() => Linking.openURL(`tel:${phone_no}`)}
                name="phone" style={{backgroundColor:'#34a8eb'}}/>
                <IconButton
                onPress={HandleDelete}
                name="cancel" style={{backgroundColor:'#eb345f'}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 20,
    elevation: 10,
    overflow: "hidden",
  },
  firstContainer: {
    width: "100%",
    height: 200,
    flex: 1,
    flexDirection: "row",
  },
  image: {
    height: "90%",
    width: "90%",
    margin: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  ButtonContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  LogoContainer: {
    width: "40%",
    height: "100%",
  },
  dataContainer: {
    flex: 1,
    justifyContent: "center",
  },
  patientAppText: {
    fontSize: 15,
    margin: 5,
  },
});
