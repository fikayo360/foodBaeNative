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

import { AppProvider } from './appContext';
import Checkout from './checkout/checkout';
import Order from './order/order';
import SingleOrder from './singleOrder/singleOrder';
import TabBar from './tabNavigation';
import Protected from './protected';
import Profile from './profile/profile';
import { getToken } from './utils/tokenStorage';
import { useEffect, useState } from 'react';

export default function App() {
  const Stack = createStackNavigator();
  const [tok,setTok] = useState<string|undefined|null>('')

  const fetch = async() => {
    const token = await getToken()
    console.log(token);
    setTok(token)
    console.log(tok);
  }

  useEffect(()=>{
    fetch()
  },[])
  
  return (
    
    <AppProvider>
       <NavigationContainer>
       <Stack.Navigator initialRouteName="Splash">
       <Stack.Screen name="Splash" component={SplashSreen} options={{ headerShown: false,gestureEnabled: false }}/>
       <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false,gestureEnabled: false }}/>
       <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{ headerShown: false,gestureEnabled: false }}/>
       <Stack.Screen name="changePassword" component={ChangePassword} options={{ headerShown: false,gestureEnabled: false }}/>
        {
          tok?(
            <>
            <Stack.Screen name="tab" component={TabBar} options={{ headerShown: false,gestureEnabled: false }}/>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false,gestureEnabled: false }}/>
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ headerShown: false,gestureEnabled: false }}/>
            <Stack.Screen name="SingleFood" component={SingleFood} options={{ headerShown: false,gestureEnabled: false }}/>
            <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false,gestureEnabled: false }}/>
            <Stack.Screen name="singleOrder" component={SingleOrder} options={{ headerShown: false,gestureEnabled: false }}/>        
            </>
          ):(<Stack.Screen name="Auth2" component={AuthScreen} options={{ headerShown: false,gestureEnabled: false }}/>)
        }
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
}

