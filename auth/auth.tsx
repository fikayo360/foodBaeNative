import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { View,Text,Image,Dimensions,TouchableWithoutFeedback,ScrollView,TouchableOpacity,TextInput,ActivityIndicator,SafeAreaView } from 'react-native';
import styles from './authstyles'
import AuthApi from '../api/authApp';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import useApp from '../hooks/useApp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeToken,getToken,removeToken } from '../utils/tokenStorage';
import ErrorComponent from '../components/errorComponent';
import NotificationAlert from '../components/notificationComponent';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as Font from 'expo-font'; 

const AuthScreen = () => {
    const windowWidth:number = Dimensions.get('window').width;
    const [tabActive,setTabActive] = useState('register')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [lusername,setLusername] = useState('')
    const [lpassword,setLpassword] = useState('')
    const [passwordVisible,setPasswordVisible] = useState(true)
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible)
    const [loading,setLoading] = useState(true)
    const [loadingL,setLoadingL] = useState(true)
    const [error,setError] = useState("")
    const [notification,setNotification] = useState("")
    const Api = new AuthApi()
    const navigation = useNavigation();
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const  { currentUser, setCurrentUser,login, logout } = useApp()

    const clearError = () => {
        setError("")
      }
      const clearNotification = () => {
        setNotification("")
      }
    
    const remtoken = async() => {
        await removeToken()
        let cooki = await getToken()
        console.log(cooki);
        logout()
    }

    const handleSignup = async() => {
        if (!username || !email || !password){
            console.log('fields cant be empty')
            setError('fields cant be empty')
            return
        }

        const formData = {
            username,email,password
        }
        try{
            console.log(formData);
            setLoading(false)
            const response = await Api.Signup(formData)
            console.log(response.data);
            setNotification(`welcome ${username}`)
            setUsername('')
            setEmail('')
            setPassword('')
            setLoading(true)
        }catch(err){
            if (axios.isAxiosError(err)) {
                console.log(err.response?.data);
                setLoading(true)
                //return err.response?.data;
              }
        }
    }

    const handleLogin = async() => {
     
        if (!lusername ||  !lpassword){
            console.log('fields cant be empty')
            setError('fields cant be empty')
            return
        }

        let loginData = {
            username:lusername,password:lpassword
        }
        try{
            setLoadingL(false)
            const response = await Api.Login(loginData)
            const {id,email,username,profile_pic} = response.data.user
            const user = {id,email,username,profile_pic}
            const token = response.data.cookie
            console.log(user,token);
            login(user,token)
            navigation.navigate('tab')
            setLoadingL(true)
            setLusername('')
            setLpassword('')
        }catch(err){
            if (axios.isAxiosError(err)) {
                console.log(err.response?.data);
                setError(err.response?.data)
                setLoadingL(true)
                //return err.response?.data;
              }
        }
    }

    useFocusEffect(() => {
        const handleBackPress = () => {
          return true;
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => backHandler.remove();
      });

      const loadFonts = async () => {
        await Font.loadAsync({
          "PoppinsBlack": require("../assets/fonts/Poppins-Black.ttf"),
          "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
          "Roboto": require("../assets/fonts/Roboto-Regular.ttf")
        });
        setFontsLoaded(true);
      };
    
      if (!fontsLoaded) {
        loadFonts();
        return null; 
      }
      
    return (
         <SafeAreaView style={styles.container}>
            {error !== "" && (<ErrorComponent text={error} clearError={clearError}/>)}
            {notification !== "" && (<NotificationAlert text={notification} clearNotification={clearNotification}/>)}
            <ScrollView contentContainerStyle={{width:'100%',height:'100%',justifyContent:"center",alignItems:'center'}}>
            <View style={[styles.innerContainer,{borderRadius:windowWidth*0.01,width:'95%',height:'90%'}]}>
            
             <View style={{width:'100%',height:'10%',borderBottomWidth:1,alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>setTabActive('register')} style={[styles.innerContainerHeaderBtn,{
                    backgroundColor: tabActive === "register" ? '#0B0033' : 'white',} ]}>
                    <Text style={{color:tabActive === "register"?'white':'black',fontSize:windowWidth*0.05,fontWeight:'bold',fontFamily:"Roboto"}}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setTabActive('login')} style={[styles.innerContainerHeaderBtn,{
                    backgroundColor: tabActive === "login" ? '#0B0033' : 'white'}]}>
                        <Text style={{color:tabActive === "login"?'white':'black',fontSize:windowWidth*0.05,fontWeight:'bold'}}>Login</Text>
                    </TouchableOpacity>
             </View>
             <ScrollView contentContainerStyle={{width:'100%',height:'100%',justifyContent:"center",alignItems:'center',paddingTop:windowWidth*0.09}}>
             
             <View style={styles.inputs}>
             
            {
                tabActive === 'register'?
                (<View style={{width:'100%',height:'100%'}}>

                <View style={[styles.inputsWrap,{height:windowWidth*0.18,padding:windowWidth*0.03,marginTop:windowWidth*0.1}]}>
                <Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/email.png')}  />
                
                <TextInput
                style={[styles.inputStyles,{marginLeft:windowWidth*0.02,fontSize:windowWidth*0.04}]}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
                />
               
                </View>

                <View style={[styles.inputsWrap,{height:windowWidth*0.18,padding:windowWidth*0.03,marginTop:windowWidth*0.1}]}>
                <Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/user.png')}  />
                
                <TextInput
                style={[styles.inputStyles,{marginLeft:windowWidth*0.02,fontSize:windowWidth*0.04}]}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Username"
                />
                   
                </View>
                
                <View style={[styles.inputsWrap,{height:windowWidth*0.18,padding:windowWidth*0.03,marginTop:windowWidth*0.1}]}>
                <TouchableOpacity onPress={togglePasswordVisibility}><Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/eye.png')}  /></TouchableOpacity>
                <TextInput
                style={[styles.inputStyles,{marginLeft:windowWidth*0.02,fontSize:windowWidth*0.04}]}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Password"
                secureTextEntry={passwordVisible}
                />     
                </View>

                <TouchableOpacity onPress={handleSignup} style={[styles.signUpBtn,{borderRadius:windowWidth*0.03,marginTop:windowWidth*0.2,height:windowWidth*0.15}]}>
                    {loading?<Text style={[styles.signUpBtnTxt,{fontSize:windowWidth*0.05}]}>SignUp</Text> : 
                    <ActivityIndicator size="large" color="white" style={{position:'absolute'}}/>}
                </TouchableOpacity>
                
                <Text style={{fontSize:windowWidth*0.04,marginTop:windowWidth*0.04,alignSelf:'center',fontWeight:'bold'}}>forgot password ?</Text>

                </View>)
                :                 
                (<View style={{width:'100%',height:'100%'}}>
                <View style={[styles.inputsWrap,{height:windowWidth*0.18,padding:windowWidth*0.03,marginTop:windowWidth*0.13}]}>
                <Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/user.png')}  />
                
                <TextInput
                style={[styles.inputStyles,{marginLeft:windowWidth*0.02,fontSize:windowWidth*0.04}]}
                onChangeText={text => setLusername(text)}
                value={lusername}
                placeholder="Username"
                />
                   
                </View>
                
                <View style={[styles.inputsWrap,{height:windowWidth*0.18,padding:windowWidth*0.03,marginTop:windowWidth*0.13}]}>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                <Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/eye.png')}  /></TouchableOpacity>
                <TextInput
                style={[styles.inputStyles,{marginLeft:windowWidth*0.02,fontSize:windowWidth*0.04}]}
                onChangeText={text => setLpassword(text)}
                value={lpassword}
                placeholder="Password"
                secureTextEntry={passwordVisible}
                />
                </View>

                <TouchableOpacity onPress={handleLogin} style={[styles.signUpBtn,{borderRadius:windowWidth*0.03,marginTop:windowWidth*0.15,height:windowWidth*0.15}]}>
                    {loadingL === true ?<Text style={[styles.signUpBtnTxt,{fontSize:windowWidth*0.05}]}>Login</Text>:
                    <ActivityIndicator size="large" color="white" style={{position:'absolute'}}/>}
                </TouchableOpacity>
                
                </View>
                )
            }
            
             </View>
           
             </ScrollView>
             </View>
            </ScrollView>
         </SafeAreaView>
        
    )

}

export default AuthScreen