import styles from "../auth/authstyles";
import { View,Text,Image,Dimensions,ScrollView,TouchableOpacity,TextInput,SafeAreaView,ActivityIndicator } from 'react-native';
import React, { FC, useState } from 'react';
import AuthApi from "../api/authApp";
import axios from "axios";

const ChangePassword = () => {
    const windowWidth:number = Dimensions.get('window').width;
    const [email,setEmail] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [token,setToken] = useState('')
    const [passwordVisible,setPasswordVisible] = useState(true)
    const [tokenVisible,setTokenVisible] = useState(true)
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible)
    const toggleTokenVisibility = () => setTokenVisible(!tokenVisible)
    const [loading,setLoading] = useState(true)
    const Api = new AuthApi()

    const submit = async() => {
        if ( !email || !newPassword || !token){
            console.log('fields cant be empty')
            return
        }

        const formData = {email,newPassword,token}
        try{
            console.log(formData);
            setLoading(false)
            const response = await Api.ChangePassword(formData)
            console.log(response.data);
            setEmail('')  
            setToken('')
            setNewPassword('')  
            setLoading(true)
        }catch(err){
            if (axios.isAxiosError(err)) {
                console.log(err.response?.data);
                setLoading(true)
              }
        }
    }

return (
    <SafeAreaView style={[styles.container,{justifyContent:'center'}]}>
        
        <View style={[styles.innerContainer,{borderRadius:windowWidth*0.01,width:'95%',height:'90%',paddingTop:windowWidth*0.01}]}>
        <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',marginLeft:windowWidth*0.02}}>Change password</Text>
        <ScrollView contentContainerStyle={{width:'100%',height:'100%',justifyContent:"center",alignItems:'center',paddingTop:windowWidth*0.02}}>  
            <View style={{width:'100%',height:'100%'}}>

            <View style={[styles.inputsWrap,{height:windowWidth*0.18,padding:windowWidth*0.03,marginTop:windowWidth*0.1}]}>
            <Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/email.png')}  />
            
            <TextInput
            style={[styles.inputStyles,{marginLeft:windowWidth*0.02,fontSize:windowWidth*0.04}]}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Enter Email"
            />
            
            </View>

            <View style={[styles.inputsWrap,{height:windowWidth*0.18,padding:windowWidth*0.03,marginTop:windowWidth*0.1}]}>
            <TouchableOpacity onPress={togglePasswordVisibility}><Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/eye.png')}  />
            </TouchableOpacity>
            
            <TextInput
            style={[styles.inputStyles,{marginLeft:windowWidth*0.02,fontSize:windowWidth*0.04}]}
            onChangeText={text => setNewPassword(text)}
            value={newPassword}
            placeholder="Enter new password"
            secureTextEntry={passwordVisible}
            />
            
            </View>

            <View style={[styles.inputsWrap,{height:windowWidth*0.18,padding:windowWidth*0.03,marginTop:windowWidth*0.1}]}>
            <TouchableOpacity onPress={toggleTokenVisibility}><Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/eye.png')}  />
            </TouchableOpacity>
            
            <TextInput
            style={[styles.inputStyles,{marginLeft:windowWidth*0.02,fontSize:windowWidth*0.04}]}
            multiline={true}
            numberOfLines={4}
            value={token}
            onChangeText={text => setToken(text)}
            placeholder="paste your token here"
            secureTextEntry={true}
            />
            
            </View>


            <TouchableOpacity onPress={submit} style={[styles.signUpBtn,{borderRadius:windowWidth*0.03,marginTop:windowWidth*0.1,height:windowWidth*0.15}]}>
                {loading?<Text style={[styles.signUpBtnTxt,{fontSize:windowWidth*0.05}]}>Submit</Text>:
                <ActivityIndicator size="large" color="white" style={{position:'absolute'}}/>}
            </TouchableOpacity>

            </View>
    </ScrollView>
        </View>
    </SafeAreaView>
)
}

export default ChangePassword