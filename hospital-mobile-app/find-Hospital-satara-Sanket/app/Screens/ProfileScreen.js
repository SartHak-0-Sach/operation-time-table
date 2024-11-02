import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Divider from '../components/Divider';
import useAuth from '../auth/useAuth';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';

export default function ProfileScreen({navigation}) {
  const {logout,userData} = useAuth();
  const {email,name,photoUrl} = userData;
  return (
   <Screen>
     <View style={styles.container}>
        <Divider />
        <View style={styles.profile} >
            <View style={styles.profileLogoContainer}>
              <Image 
                  style={styles.profileLogo}
                  source={{uri : photoUrl}} 
              />

            </View>

            <View style={styles.profileDataContainer}>
              <AppText>{name}</AppText>
              <AppText>{email}</AppText>
            </View>
        </View>
        <Divider />
        <ListItem
          title="Running Appointments"
          onPress={() => navigation.navigate('RunningAppointments')}
          IconComponent={
            <Icon name="account-check" backgroundColor={colors.secondary} />
          }
        />
         <Divider />
         <ListItem
          title="Appointment History"
          onPress={() => navigation.navigate('AppointMentHistory')}
          IconComponent={
            <Icon name="history" backgroundColor={colors.medium} />
          }
        />
         <Divider />
         <ListItem
          title="About us"
          onPress={() => navigation.navigate('Aboutus')}
          IconComponent={<Icon name="android" backgroundColor="#01F7CC" />}
        />
         <Divider />
        <ListItem
          title="Log Out"
          onPress={() => logout()}
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
     </View>

   </Screen>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: "row",
  },
  profileLogo: {
    borderRadius: 50,
    height: 60,
    width: 60,
  },
  profileLogoContainer: {
    margin: 10,
    height: "100%",
  },
  profileDataContainer: {
    height: "100%",
    margin: 10,
    alignContent: "center",
  },
});
