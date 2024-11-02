import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../Screens/LoginScreen';
import Registration from '../Screens/Registration';
import HomeScreen from '../Screens/HomeScreen';
import HospitalDetails from '../Screens/HospitalDetails';
import ProfileScreen from '../Screens/ProfileScreen';
import RunningAppointment from '../Screens/RunningAppointment';
import AppointmentHistory from '../Screens/AppointmentHistory';
import Aboutus from '../Screens/Aboutus';


const Stack = createStackNavigator();
export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Hospital_Details' component={HospitalDetails} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name="RunningAppointments" component={RunningAppointment} />
        <Stack.Screen name="AppointMentHistory" component={AppointmentHistory} />
        <Stack.Screen name="Aboutus" component={Aboutus} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})