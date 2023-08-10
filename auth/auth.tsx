import React, { FC } from 'react';
import { useState } from 'react';
import { View,SafeAreaView,Text,Image,Dimensions,ScrollView,TouchableOpacity,TextInput } from 'react-native';
import styles from './authstyles'
import * as Font from 'expo-font'; 

const AuthScreen:FC = () => {
    const windowWidth:number = Dimensions.get('window').width;
    const [tabActive,setTabActive] = useState('register')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={[styles.innerContainer,{borderRadius:windowWidth*0.05,width:'90%',height:'70%'}]}>
             <View style={{width:'100%',height:'15%',borderBottomWidth:1,alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:windowWidth*0.02}}>
                <TouchableOpacity onPress={()=>setTabActive('register')} style={[styles.innerContainerHeaderBtn,{borderRadius:windowWidth*0.01,
                    backgroundColor: tabActive === "register" ? '#1B98E0' : 'white'} ]}>
                    <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setTabActive('login')} style={[styles.innerContainerHeaderBtn,{borderRadius:windowWidth*0.01,
                    backgroundColor: tabActive === "login" ? '#1B98E0' : 'white'}]}><Text>Login</Text></TouchableOpacity>
             </View>

             <ScrollView>
            <View style={styles.inputs}>
            {
                tabActive === 'register'?
                (<View style={{width:'100%',height:'100%'}}>
                <View style={styles.inputsWrap}>
                {/*<Image width={windowWidth * 0.14} height={windowWidth * 0.14} source={require('../assets/email.png')}  />*/}
                <TextInput
                style={[]}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="username"
                />
                </View>

                <View style={styles.inputsWrap}>
                {/*<Image width={windowWidth * 0.14} height={windowWidth * 0.14} source={require('../assets/user.png')}  />*/}
                <TextInput
                style={[]}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="username"
                />
                </View>
                
                <View style={styles.inputsWrap}>
                {/*<Image width={windowWidth * 0.14} height={windowWidth * 0.14} source={require('../assets/view.png')}  />*/}
                <TextInput
                style={[]}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="password"
                secureTextEntry
                />
                </View>

                </View>)
                :

                (<View style={{}}>
                <TextInput
                style={[]}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="username"
                />
                
                <TextInput
                style={[]}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="password"
                secureTextEntry
                />
                </View>)
            }
            </View>
             </ScrollView>
            </View>
        </View>
    )

}

export default AuthScreen