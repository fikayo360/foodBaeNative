import styles from "./orderStyles";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
import useApp from "../hooks/useApp";
import { useState,useEffect,useCallback } from "react";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Order = () => {
    const windowWidth  = Dimensions.get('window').width
    const {currentUser,theme} = useApp()
    const navigation = useNavigation()
    return(
    <SafeAreaView style={[styles.container,{backgroundColor:theme==='dark'?'#1e1e1e':'white'}]}>
        <ScrollView style={{flex:1}}>
        <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,paddingVertical:windowWidth*0.08,marginBottom:windowWidth*0.01,backgroundColor:theme==='dark'?'#282a2b':'white'}]}>
        <TouchableOpacity>
        <Fontisto name="angle-left" size={windowWidth*0.07} color={theme==='dark'?'#fafafa':"black"} />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.07,color:theme==='dark'?'#fafafa':'black'}}> Orders </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={{uri:currentUser.profile_pic}}  />
        </TouchableOpacity>
        </View>

        <View style={{width:'97%',alignSelf:'center',marginBottom:windowWidth*0.05}}>
            <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}> Completed Orders</Text>
        </View>
        <View style={{width:'100%',alignSelf:'center'}}>
            <View style={{width:'97%',height:windowWidth*0.28,alignSelf:'center',flexDirection:'row',backgroundColor:theme==='dark'?'#1e1e1e':'white',
            borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.05}}>
                <View style={{width:'35%',height:'100%'}}>
                <Image resizeMode="cover" style={{width:'100%', height:'100%',borderRadius:windowWidth*0.03}} source={require('../assets/ramen.jpg')}  />
                </View>
                <View style={{width:'45%',height:'100%',flexDirection:'column',marginLeft:windowWidth*0.05,justifyContent:'space-between',paddingVertical:windowWidth*0.05}}>
                    <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>ramen</Text>
                    <Text style={{fontSize:windowWidth*0.05,color:theme==='dark'?'#fafafa':'black'}}>2000</Text>
                </View>
            </View>

            <View style={{width:'97%',height:windowWidth*0.28,alignSelf:'center',flexDirection:'row',borderRadius:windowWidth*0.03,
            marginBottom:windowWidth*0.05,backgroundColor:theme==='dark'?'#1e1e1e':'white'}}>
                <View style={{width:'35%',height:'100%'}}>
                <Image resizeMode="cover" style={{width:'100%', height:'100%',borderRadius:windowWidth*0.03}} source={require('../assets/italian.jpg')}  />
                </View>
                <View style={{width:'45%',height:'100%',flexDirection:'column',marginLeft:windowWidth*0.05,justifyContent:'space-between',paddingVertical:windowWidth*0.05}}>
                    <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>ramen</Text>
                    <Text style={{fontSize:windowWidth*0.05,color:theme==='dark'?'#fafafa':'black'}}>2000</Text>
                </View>
            </View>

            <View style={{width:'97%',height:windowWidth*0.28,alignSelf:'center',flexDirection:'row',
            borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.05,backgroundColor:theme==='dark'?'#1e1e1e':'white'}}>
                <View style={{width:'35%',height:'100%'}}>
                <Image resizeMode="cover" style={{width:'100%', height:'100%',borderRadius:windowWidth*0.03}} source={require('../assets/mexican.jpg')}  />
                </View>
                <View style={{width:'45%',height:'100%',flexDirection:'column',marginLeft:windowWidth*0.05,justifyContent:'space-between',paddingVertical:windowWidth*0.05}}>
                    <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>ramen</Text>
                    <Text style={{fontSize:windowWidth*0.05,color:theme==='dark'?'#fafafa':'black'}}>2000</Text>
                </View>
            </View>

        </View>
        </ScrollView>
    </SafeAreaView>)
}

export default Order