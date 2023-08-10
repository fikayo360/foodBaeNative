import React, { FC } from 'react';
import { useState } from 'react';
import { View,SafeAreaView,Text,Image,Dimensions } from 'react-native';
import styles from './splashstyles';
import * as Font from 'expo-font'; 

const SplashSreen:FC = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    
    const loadFonts = async () => {
        await Font.loadAsync({
          'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
          'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
          'CherryBombOne-Regular': require('../assets/fonts/CherryBombOne-Regular.ttf')
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
                <Text style={[styles.txt,{fontSize:windowWidth*0.1,fontFamily:'Poppins-Bold'}]}> FOOD BAE </Text>
            </View>
        </View>
    )
}

export default SplashSreen



