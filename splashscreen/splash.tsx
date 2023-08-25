import React, { FC } from 'react';
import { useState,useEffect } from 'react';
import { View,SafeAreaView,Text,Image,Dimensions, Button, TouchableOpacity } from 'react-native';
import styles from './splashstyles';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font'; 
import  NetInfo  from '@react-native-community/netinfo';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { RefreshControl } from "react-native";

const SplashSreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
    const navigation = useNavigation();
    const [isOnline, setIsOnline] = useState<boolean|null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const fetchData = async () => {
      const netInfoState = await NetInfo.fetch();
      setIsOnline(netInfoState.isConnected);
    };
    
    useEffect(() => {
      fetchData();
    }, []);

    useEffect(() => {
      isOnline &&
     ( setTimeout(() => {
        navigation.navigate('Auth');
      }, 5000))
    }, []);

    const onRefresh = async()=>{
      fetchData()
    }

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
  
    const windowWidth:number = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
          {
            isOnline?(
            <View style={styles.itemsContain}>
            <Image style={[styles.gif,{width:windowWidth*0.22, height:windowWidth*0.22}]} source={require('../assets/iceCream.png')}  />
            <Text style={[styles.txt,{fontSize:windowWidth*0.1,fontFamily:'Roboto'}]}> FOOD BAE</Text>
            </View>
            ):( 
            <View style={{width:'100%',height:windowWidth*0.6,justifyContent:'center',alignItems:'center'}}>
            <Image style={[{width:windowWidth*0.4, height:windowWidth*0.4}]} source={require('../assets/poor.png')}  />
            <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold'}}> NO INTERNET CONNECTION </Text>
            <Text style={{fontSize:windowWidth*0.05}}>check ur connection and try agin </Text>
            <TouchableOpacity onPress={fetchData} style={{width:'80%',height:windowWidth*0.17,borderRadius:windowWidth*0.03,marginTop:windowWidth*0.04,justifyContent:'center',alignItems:'center',alignSelf:'center',borderWidth:1,borderColor:'black',backgroundColor:'#001D4A'}}>
              <Text style={{fontSize:windowWidth*0.05,color:'white'}}>try again </Text>
              </TouchableOpacity>
            </View>
            )
          }
        </View>
    )
    }

export default SplashSreen



