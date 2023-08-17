import styles from "./orderStyles";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
import useApp from "../hooks/useApp";
import { useState,useEffect,useCallback } from "react";

const Order = () => {
    const windowWidth  = Dimensions.get('window').width
    return(<SafeAreaView style={styles.container}>
        <ScrollView style={{flex:1}}>
        <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.01,paddingVertical:windowWidth*0.08}]}>
        <TouchableOpacity>
        <Image style={{width:windowWidth*0.07, height:windowWidth*0.07,borderRadius:windowWidth*0.5}} source={require('../assets/left.png')}  />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.07}}> Orders </Text>
        <TouchableOpacity style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={require('../assets/p1.jpg')}  />
        </TouchableOpacity>
        </View>
        <View style={{width:'97%',alignSelf:'center',marginBottom:windowWidth*0.05}}>
            <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold'}}> Completed Orders</Text>
        </View>
        <View style={{width:'100%',alignSelf:'center'}}>
            <View style={{width:'97%',height:windowWidth*0.28,alignSelf:'center',flexDirection:'row',backgroundColor:'#F2F4F3',borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.05}}>
                <View style={{width:'35%',height:'100%'}}>
                <Image resizeMode="cover" style={{width:'100%', height:'100%',borderRadius:windowWidth*0.03}} source={require('../assets/ramen.jpg')}  />
                </View>
                <View style={{width:'45%',height:'100%',flexDirection:'column',marginLeft:windowWidth*0.05,justifyContent:'space-between',paddingVertical:windowWidth*0.05}}>
                    <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold'}}>ramen</Text>
                    <Text style={{fontSize:windowWidth*0.05}}>2000</Text>
                </View>
            </View>

            <View style={{width:'97%',height:windowWidth*0.28,alignSelf:'center',flexDirection:'row',backgroundColor:'#F2F4F3',borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.05}}>
                <View style={{width:'35%',height:'100%'}}>
                <Image resizeMode="cover" style={{width:'100%', height:'100%',borderRadius:windowWidth*0.03}} source={require('../assets/italian.jpg')}  />
                </View>
                <View style={{width:'45%',height:'100%',flexDirection:'column',marginLeft:windowWidth*0.05,justifyContent:'space-between',paddingVertical:windowWidth*0.05}}>
                    <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold'}}>ramen</Text>
                    <Text style={{fontSize:windowWidth*0.05}}>2000</Text>
                </View>
            </View>

            <View style={{width:'97%',height:windowWidth*0.28,alignSelf:'center',flexDirection:'row',backgroundColor:'#F2F4F3',borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.05}}>
                <View style={{width:'35%',height:'100%'}}>
                <Image resizeMode="cover" style={{width:'100%', height:'100%',borderRadius:windowWidth*0.03}} source={require('../assets/mexican.jpg')}  />
                </View>
                <View style={{width:'45%',height:'100%',flexDirection:'column',marginLeft:windowWidth*0.05,justifyContent:'space-between',paddingVertical:windowWidth*0.05}}>
                    <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold'}}>ramen</Text>
                    <Text style={{fontSize:windowWidth*0.05}}>2000</Text>
                </View>
            </View>

        </View>
        </ScrollView>
    </SafeAreaView>)
}

export default Order