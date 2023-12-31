import styles from "./singleOrderStyles";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
import useApp from "../hooks/useApp";
import { useState,useEffect,useCallback } from "react";

import * as Location from 'expo-location';
import MapView, { Marker,Polyline } from 'react-native-maps';
import axios from "axios";
import Cartitems from "../mocks/cartItems";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from '@expo/vector-icons';


interface geolocation {
    latitude: number;
    longitude: number;
}

const SingleOrder = ({route}:any) => {
  const {currentUser,theme} = useApp()
    const windowWidth = Dimensions.get('window').width
    const [userLocation, setUserLocation] = useState<geolocation>({latitude:0,longitude:0});
    const [serverLocation, setServerLocation] = useState<geolocation>({latitude:0,longitude:0});
    const navigation = useNavigation()
    const {Data} = route.params

    useEffect(()=>{
      console.log('hi');
      console.log(route.params);
    },[])
  
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

    function generateLocation(lat:number, lon:number, miles:number) {
      // Earth's radius in miles
      const earthRadius = 3958.8;
    
      // Convert miles to radians
      const milesToRadians = miles / earthRadius;
    
      // Convert latitude and longitude from degrees to radians
      const latRad = (lat * Math.PI) / 180;
      const lonRad = (lon * Math.PI) / 180;
    
      // Calculate new latitude
      const newLatRad = latRad + milesToRadians;
    
      // Calculate new longitude
      const newLonRad = lonRad + (milesToRadians / Math.cos(latRad));
    
      // Convert back to degrees
      const newLat = (newLatRad * 180) / Math.PI;
      const newLon = (newLonRad * 180) / Math.PI;
    
      return {
        latitude: newLat,
        longitude: newLon,
      };
    }

    const randomLocation = generateLocation(userLocation.latitude,userLocation.longitude,0.5)
  
    // const getServerLocation = async () => {
    //     try{
            
    //         const response = await axios.get('https://food-lpc9.onrender.com/api/v1/server-location')
    //         setServerLocation(response.data)
    //         console.log(serverLocation);
    //     }
    //     catch(err){
    //         if (axios.isAxiosError(err)) {
    //            console.log(err);
    //           }
    //     }
    // }

    useEffect(() => {
      const fetchData = async () => {
        // await getServerLocation();
        await getCurrentLocation();
      };
    
      fetchData();
    }, []);

    
    useEffect(() => {
      console.log('User Location:', userLocation);
      console.log(randomLocation);
      // console.log('Server Location:', serverLocation);
    }, [userLocation]);

    const initialRegion = {
      latitude: 6.664475508476442,
      longitude: 3.49647723224038,
      latitudeDelta: 0.0522,
      longitudeDelta: 0.0521, 
    };
    return (
      
        <SafeAreaView style={[styles.container,{backgroundColor:theme==='dark'?'#1e1e1e':'white'}]}>
        <ScrollView style={{flex:1}}>
        <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,paddingVertical:windowWidth*0.08,marginBottom:windowWidth*0.01,borderBottomWidth:1,
          borderBottomColor:theme==='dark'?'#fafafa':"black",backgroundColor:theme==='dark'?'#282a2b':'white'}]}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Fontisto name="angle-left" size={windowWidth*0.07} color={theme==='dark'?'#fafafa':"black"} />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.07,color:theme==='dark'?'#fafafa':'black'}}> Order </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={{uri:currentUser.profile_pic}}  />
        </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height:windowWidth*1.6,borderBottomColor:'black',borderBottomWidth:1}}>
        <MapView
        style={{ width: '100%', height:'100%'}}
        initialRegion={initialRegion}
      >
        <Marker coordinate={userLocation} title="Your Location" />
        <Marker coordinate={randomLocation} title="Server Location" />
        <Polyline
        coordinates={[
          { latitude: userLocation.latitude, longitude: userLocation.longitude },
          { latitude: randomLocation.latitude, longitude: randomLocation.longitude },
        ]}
        strokeWidth={1} 
        strokeColor="green" 
      />
      </MapView>
        </View>

        <View style={{width:'97%',alignSelf:"center",paddingHorizontal:windowWidth*0.02,paddingTop:windowWidth*0.05}}>
          <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginBottom:windowWidth*0.1,alignSelf:"center"}}> 
          <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>status</Text>
          <Text style={{fontSize:windowWidth*0.05,color:theme==='dark'?'#fafafa':'black'}}>{String(Data.status)}</Text>
          </View>
          <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginBottom:windowWidth*0.1,alignSelf:"center"}}>
          <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}> amount </Text>
          <Text style={{fontSize:windowWidth*0.05,color:theme==='dark'?'#fafafa':'black'}}>{Data.amount}</Text>
          </View>
          <View style={{width:'100%',justifyContent:'space-between',marginBottom:windowWidth*0.06,alignSelf:"center"}}>
          <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',marginBottom:windowWidth*0.02,color:theme==='dark'?'#fafafa':'black'}}>address</Text>
          <Text style={{fontSize:windowWidth*0.05,color:theme==='dark'?'#fafafa':'black'}}>{Data.address}</Text>
          </View>
        </View>

        <View style={[styles.itemsContainer,{paddingLeft:windowWidth*0.015,marginBottom:windowWidth*0.05}]}>
            <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',marginBottom:windowWidth*0.03,color:theme==='dark'?'#fafafa':'black'}}>Items</Text>
           
            {Data.products && Data.products.map((item:any,index:any)=> (
                
                <View key={index.toString()} style={[styles.cartItems,{paddingHorizontal:windowWidth*0.03,height:windowWidth*0.23,borderRadius:windowWidth*0.03,
                marginBottom:windowWidth*0.05,borderColor:theme==='dark'?'#fafafa':'black'}]}>
               
                <Image style={{width:windowWidth*0.15, height:windowWidth*0.15,borderRadius:windowWidth*0.5,marginRight:windowWidth*0.03}} source={{uri:item.image}}/> 
                <View style={{marginRight:windowWidth*0.1,marginLeft:windowWidth*0.08}}>
                    <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>{item.title}</Text>
                    <Text style={{fontSize:windowWidth*0.05,color:theme==='dark'?'#fafafa':'black'}}>{item.price}</Text>
                </View>
                <View style={{borderColor:'black',flexDirection:'row',alignItems:'center',
                width:windowWidth*0.18,height:windowWidth*0.11,justifyContent:'center',paddingHorizontal:windowWidth*0.017,borderRadius:windowWidth*0.047,position:'absolute',top:'20%',right:10}}>
                    <Text style={{fontSize:windowWidth*0.05,color:theme==='dark'?'#fafafa':'black'}}>{item.quantity}</Text>
                </View>
                </View>
           ))}
            
        </View>
        </ScrollView>
    </SafeAreaView>
   
    )
}

export default SingleOrder