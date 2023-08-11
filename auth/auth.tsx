import React, { FC } from 'react';
import { useState } from 'react';
import { View,Text,Image,Dimensions,TouchableWithoutFeedback,ScrollView,TouchableOpacity,TextInput,ImageBackground,Keyboard, KeyboardAvoidingView,SafeAreaView } from 'react-native';
import styles from './authstyles'
import * as Font from 'expo-font'; 

const AuthScreen:FC = () => {
    const windowWidth:number = Dimensions.get('window').width;
    const [tabActive,setTabActive] = useState('register')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [lusername,setLusername] = useState('')
    const [lpassword,setLpassword] = useState('')
    const [passwordVisible,setPasswordVisible] = useState(true)
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible)
   
    return (
         <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{width:'100%',height:'100%',justifyContent:"center",alignItems:'center'}}>
            <View style={[styles.innerContainer,{borderRadius:windowWidth*0.01,width:'95%',height:'90%'}]}>
            
             <View style={{width:'100%',height:'10%',borderBottomWidth:1,alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>setTabActive('register')} style={[styles.innerContainerHeaderBtn,{
                    backgroundColor: tabActive === "register" ? '#0B0033' : 'white',} ]}>
                    <Text style={{color:tabActive === "register"?'white':'black',fontSize:windowWidth*0.05,fontWeight:'bold'}}>Register</Text>
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

                <TouchableOpacity style={[styles.signUpBtn,{borderRadius:windowWidth*0.03,marginTop:windowWidth*0.2,height:windowWidth*0.15}]}>
                    <Text style={[styles.signUpBtnTxt,{fontSize:windowWidth*0.05}]}>SignUp</Text></TouchableOpacity>
                
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

                <TouchableOpacity style={[styles.signUpBtn,{borderRadius:windowWidth*0.03,marginTop:windowWidth*0.15,height:windowWidth*0.15}]}>
                    <Text style={[styles.signUpBtnTxt,{fontSize:windowWidth*0.05}]}>Login</Text></TouchableOpacity>
                
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