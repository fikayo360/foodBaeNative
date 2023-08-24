import React, { FC } from 'react';
import { useState,useEffect } from 'react';
import { View,SafeAreaView,Text,Image,Dimensions } from 'react-native';
import styles from './splashstyles';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font'; 


const SplashSreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
    const navigation = useNavigation();
    
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Auth');
      }, 5000);
    }, []);

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
            <View style={styles.itemsContain}>
                <Image style={[styles.gif,{width:windowWidth*0.22, height:windowWidth*0.22}]} source={require('../assets/iceCream.png')}  />
                <Text style={[styles.txt,{fontSize:windowWidth*0.1,fontFamily:'Roboto'}]}> FOOD BAE</Text>
            </View>
        </View>
    )
}

export default SplashSreen



