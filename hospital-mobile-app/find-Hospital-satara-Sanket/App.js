import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,LogBox } from 'react-native';
import AuthContext from './app/auth/context';
import OfflineNotice from './app/components/offlineNotice';
import AuthStack from './app/Navigator/AuthStack';
import MainStack from './app/Navigator/MainStack';
import AppLoading from 'expo-app-loading';
import React,{useState} from 'react';
import authStore from './app/auth/storage';
import Firebase from './app/config/firebase';

export default function App() {
  const db = Firebase.firestore();
  const [userData,setUserData] = useState(null);
  const [isReady,setReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStore.getData();
    if(user){
      const {uid} = JSON.parse(user);
      await db.collection('AppUsers').doc(uid).get()
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
     <OfflineNotice/>
     <NavigationContainer>
      {userData ? <MainStack /> : <AuthStack />}
     </NavigationContainer>
   </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
