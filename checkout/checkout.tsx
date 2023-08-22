import styles from "./checkoutStyles";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
import useApp from "../hooks/useApp";
import { useState,useEffect,useCallback } from "react";
import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import Order from "../api/order";
import axios from "axios";


const Checkout = () => {
    const windowWidth = Dimensions.get('window').width
    const {currentUser,cartItems,totalValue,address,clearCartData} = useApp()
    const navigation = useNavigation()
    const order = new Order()

    const createOrder = async() => {
        console.log('hi');
    //    try{
    //     let OrderData = {products:cartItems,amount:totalValue,address}
    //     const response = await order.createOrder(OrderData)
    //     console.log(response.data);
    //     clearCartData()
    //     console.log({cartItems,totalValue,address});
    //     navigation.navigate('singleOrder')
    //    }catch(err){
    //     if (axios.isAxiosError(err)) {
    //         console.log(err.response?.data);
    //       }
    //    }
    }


    return (
       
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex:1}}>
            <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.01,paddingVertical:windowWidth*0.08}]}>
            <TouchableOpacity>
            <Image style={{width:windowWidth*0.07, height:windowWidth*0.07,borderRadius:windowWidth*0.5}} source={require('../assets/left.png')}  />
            </TouchableOpacity>
            <Text style={{fontSize:windowWidth*0.07}}> Checkout </Text>
            <TouchableOpacity style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
            <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={require('../assets/p1.jpg')}  />
            </TouchableOpacity>
           </View>

           <View style={{ flex: 1 }}>
           <Paystack  
            paystackKey="pk_live_1e92b99a9ac91716840902610baab588a19f6ba8"
            amount={totalValue}
            billingEmail={currentUser.email}
            activityIndicatorColor="green"
            onCancel={(e) => {
            navigation.navigate('singleOrder')
            // navigation.navigate('home')
            }}
            onSuccess={(res) => {
            //  navigation.navigate('singleOrder')
            createOrder
            }}
            autoStart={true}
            />
            </View>
                </ScrollView>
            </SafeAreaView>
          
    )
}

export default Checkout