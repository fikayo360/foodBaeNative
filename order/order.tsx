import styles from "./orderStyles";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
import useApp from "../hooks/useApp";
import { useState,useEffect,useCallback } from "react";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Order from "../api/order";


const Orders = () => {
    const windowWidth  = Dimensions.get('window').width
    const {currentUser,theme} = useApp()
    const navigation = useNavigation()
    const order = new Order
    const [orders,setOrders] = useState([])

    const getOrders = async() => {
        try{
            const response = await order.getUserOrders(currentUser.id)
            console.log(response.data);
            setOrders(response.data)
        }
        catch(err){
            if (axios.isAxiosError(err)) {
                console.log(err.response?.data);
                }
            }   
    }

    useEffect(()=>{
        getOrders()
    },[])
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
            {
                orders.length > 0 && orders.map((item:any,index:any)=> (
                    <TouchableOpacity onPress={() => navigation.navigate('singleOrder',{Data:item})} key={index.toString()} style={{width:'97%',height:windowWidth*0.28,alignSelf:'center',flexDirection:'row',backgroundColor:theme==='dark'?'#1e1e1e':'white',
                    borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.05}}>
                        <View style={{width:'35%',height:'100%'}}>
                        <Image resizeMode="cover" style={{width:'100%', height:'100%',borderRadius:windowWidth*0.03}} source={{uri:item.products[0].image}}  />
                        </View>
                        <View style={{width:'45%',height:'100%',flexDirection:'column',marginLeft:windowWidth*0.05,justifyContent:'space-between',paddingVertical:windowWidth*0.05}}>
                            <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>{item.products[0].title}</Text>
                            <Text style={{fontSize:windowWidth*0.05,color:theme==='dark'?'#fafafa':'black'}}>{item.amount}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
        </ScrollView>
    </SafeAreaView>)
}

export default Orders