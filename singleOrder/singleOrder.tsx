import styles from "./singleOrderStyles";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
import useApp from "../hooks/useApp";
import { useState,useEffect,useCallback } from "react";

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";

interface geolocation {
    latitude: number;
    longitude: number;
}

const SingleOrder = () => {
    const windowWidth = Dimensions.get('window').width
    const [userLocation, setUserLocation] = useState<geolocation>({latitude:0,longitude:0});
    const [serverLocation, setServerLocation] = useState<geolocation>({latitude:0,longitude:0});
       
    const getCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('error occured');
        // setErrorMsg('Permission to access location was denied');
        return;
      }
      const {coords} = await Location.getCurrentPositionAsync();
      setUserLocation({latitude:coords.latitude,longitude:coords.longitude});
      console.log(userLocation);
    };

    const getServerLocation = async () => {
        try{
            
            const response = await axios.get('https://food-lpc9.onrender.com/api/v1/server-location')
            setServerLocation(response.data)
            console.log(serverLocation);
        }
        catch(err){
            if (axios.isAxiosError(err)) {
               console.log(err);
              }
        }
    }

    useEffect(() => {
      const fetchData = async () => {
        await getServerLocation();
        await getCurrentLocation();
      };
    
      fetchData();
    }, []);
    
    useEffect(() => {
      console.log('User Location:', userLocation);
      console.log('Server Location:', serverLocation);
    }, [userLocation, serverLocation]);

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={{flex:1}}>
        <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.01,paddingVertical:windowWidth*0.08,borderBottomWidth:1,borderBottomColor:'black'}]}>
        <TouchableOpacity>
        <Image style={{width:windowWidth*0.07, height:windowWidth*0.07,borderRadius:windowWidth*0.5}} source={require('../assets/left.png')}  />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.07}}> Order </Text>
        <TouchableOpacity style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={require('../assets/p1.jpg')}  />
        </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height:windowWidth*0.9,borderBottomColor:'black',borderBottomWidth:1}}>
        <MapView
        style={{ width: '100%', height:'100%'}}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={userLocation} title="Your Location" />
        <Marker coordinate={serverLocation} title="Server Location" />
      </MapView>
        </View>

        <View style={{width:'97%',alignSelf:"center",paddingHorizontal:windowWidth*0.02,paddingTop:windowWidth*0.05}}>
          <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginBottom:windowWidth*0.1,alignSelf:"center"}}> 
          <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold'}}>status</Text>
          <Text style={{fontSize:windowWidth*0.05}}>pending</Text>
          </View>
          <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginBottom:windowWidth*0.1,alignSelf:"center"}}>
          <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold'}}> amount </Text>
          <Text style={{fontSize:windowWidth*0.05}}>2000</Text>
          </View>
          <View style={{width:'100%',justifyContent:'space-between',marginBottom:windowWidth*0.06,alignSelf:"center"}}>
          <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',marginBottom:windowWidth*0.02}}>address</Text>
          <Text style={{fontSize:windowWidth*0.05}}>27,glourious hope oriokuta boulevard ikorodu lagos</Text>
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default SingleOrder