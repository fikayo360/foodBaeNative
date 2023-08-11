
import styles from "../auth/authstyles";
import React, { FC, useState } from 'react';
import { View,Text,Image,Dimensions,TouchableWithoutFeedback,ScrollView,TouchableOpacity,TextInput,ImageBackground,Keyboard, KeyboardAvoidingView,SafeAreaView } from 'react-native';

const ForgotPassword:FC = () => {
    const windowWidth:number = Dimensions.get('window').width;
    const [email,setEmail] = useState('')
return (
    <SafeAreaView style={[styles.container,{justifyContent:'center'}]}>
        
        <View style={[styles.innerContainer,{borderRadius:windowWidth*0.01,width:'95%',height:'60%',paddingTop:windowWidth*0.02,}]}>
        <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',marginLeft:windowWidth*0.02}}>Forgot password?</Text>
        <ScrollView contentContainerStyle={{width:'100%',height:'100%',justifyContent:"center",alignItems:'center',paddingTop:windowWidth*0.09}}>  
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


            <TouchableOpacity style={[styles.signUpBtn,{borderRadius:windowWidth*0.03,marginTop:windowWidth*0.1,height:windowWidth*0.15}]}>
                <Text style={[styles.signUpBtnTxt,{fontSize:windowWidth*0.05}]}>Submit</Text>
            </TouchableOpacity>

            </View>
    </ScrollView>
        </View>
    </SafeAreaView>
)
}

export default ForgotPassword