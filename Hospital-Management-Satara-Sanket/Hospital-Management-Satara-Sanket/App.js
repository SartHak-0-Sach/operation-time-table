import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/Screens/LoginScreen';
import Firebase from './app/config/firebase';
import { useState } from 'react';
import authStore from './app/auth/storage';
import AppLoading from 'expo-app-loading';
import AuthContext from './app/auth/context';
import OfflineNotice from './app/components/offlineNotice';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './app/Navigator/MainNavigator';
import AuthNavigator from './app/Navigator/AuthNavigator';
import Registration from './app/Screens/Registration';
import 'react-native-gesture-handler';


export default function App() {
  const db=Firebase.firestore();
  const [userData,setUserData] = useState(null);
  const [isReady,setReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStore.getData();
    if(user){
      const {uid} = JSON.parse(user);
      await db.collection('hospitals').doc(uid).get()
      .then(snapshot => 
        setUserData(snapshot.data())
        );
    }
  }

  if(!isReady){
    return <AppLoading onError={console.warn} startAsync={restoreUser} onFinish={() => setReady(true)} />
  }
  return (
   <AuthContext.Provider value={{userData,setUserData}}>
    <OfflineNotice />

    <NavigationContainer>
        {userData ? <MainNavigator /> : <AuthNavigator /> }
    </NavigationContainer>

   </AuthContext.Provider>

  );
}


