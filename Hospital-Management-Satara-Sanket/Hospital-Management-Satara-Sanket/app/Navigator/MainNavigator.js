import { createStackNavigator } from '@react-navigation/stack';
import AppointmentHistory from '../Screens/AppointmentHistory';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import RunningAppointments from '../Screens/RunningAppointment';
import AboutUs from '../Screens/Aboutus';


const Stack = createStackNavigator();

export default MainNavigator = () => (
    <Stack.Navigator 
      screenOptions={{
        headerShown:false
      }}
    >

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name="RunningAppointments" component={RunningAppointments} />
        <Stack.Screen name="AppointMentHistory" component={AppointmentHistory} />
        <Stack.Screen name="Aboutus" component={AboutUs} />
  



    </Stack.Navigator>
)