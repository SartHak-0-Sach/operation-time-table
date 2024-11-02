import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import Registration from '../Screens/Registration';
// import ForgotPassword from '../Screens/ForgotPassword';

const Stack = createStackNavigator();

export default AuthNavigator = () => (
    <Stack.Navigator 
      screenOptions={{
        headerShown:false
      }}
    >

    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={Registration} />
    {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}




    </Stack.Navigator>
)