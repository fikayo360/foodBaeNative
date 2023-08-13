import AuthScreen from './auth/auth';
import ChangePassword from './changePassword/changePassword';
import ForgotPassword from './forgotPassword/forgotpassword';
import SplashSreen from './splashscreen/splash';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import Home from './home/home';
import CategoryScreen from './categoryScreen/category';
import SingleFood from './singleFood/singleFood';
import CartScreen from './cart/cartScreen';
axios.defaults.baseURL = 'https://food-lpc9.onrender.com/';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <CartScreen/>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Splash">
    //   <Stack.Screen
    //       name="Splash"
    //       component={SplashSreen}
    //       options={{ headerShown: false,gestureEnabled: false }}
    //     />
    //     <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false,gestureEnabled: false }}/>
    //     <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{ headerShown: false,gestureEnabled: false }}/>
    //     <Stack.Screen name="changePassword" component={ChangePassword} options={{ headerShown: false,gestureEnabled: false }}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

