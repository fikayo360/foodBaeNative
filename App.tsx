import AuthScreen from './auth/auth';
import ChangePassword from './changePassword/changePassword';
import ForgotPassword from './forgotPassword/forgotpassword';
import SplashSreen from './splashscreen/splash';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/';

export default function App() {
  return (
    <AuthScreen/>
  );
}

