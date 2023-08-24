import styles from "./categoryStyle";
import React, { FC } from 'react';
import { useState,useEffect } from 'react';
import { View,Text,Image,Dimensions,TouchableWithoutFeedback,ScrollView,TouchableOpacity,SafeAreaView,ActivityIndicator} from 'react-native';
import FoodCategoryItem from "../components/foodCategoryItem";
import FoodItems from '../mocks/foodCategoryItem';
import CategoryApi from "../api/categories";
import { RefreshControl } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import useApp from "../hooks/useApp";
import { Fontisto } from '@expo/vector-icons';


const CategoryScreen = ({route}:any) => {
    const {catName} = route.params
    const [it,setIt] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [loading,setLoading] = useState(true)
    const categoryApi = new CategoryApi()
    const {currentUser,theme} = useApp()

    const getCategories = async() => {
        try{
            const response = await categoryApi.getCategories(catName)
            setIt(response.data)
            console.log(it);
            setLoading(false)
        }catch(err){
            if (axios.isAxiosError(err)) {
                console.log(err.response?.data);
                setLoading(false)
              }
        }
    }

    useEffect(() => {
        getCategories()
    },[])

    const onRefresh = async()=>{
        setLoading(true)
        getCategories()
        setLoading(false)
      }

    const windowWidth = Dimensions.get('window').width
    const navigation = useNavigation()
    return (
       
    <SafeAreaView style={[styles.container,{backgroundColor:theme==='dark'?'#1e1e1e':'white'}]}>
        {loading && <ActivityIndicator size='large' color="black" style={{position:'absolute',top:'30%',left:'50%',zIndex:2}}/>}
        <View style={[styles.header,{height:'10%',paddingHorizontal:windowWidth*0.03,paddingVertical:windowWidth*0.04,marginBottom:windowWidth*0.05,backgroundColor:theme==='dark'?'#282a2b':'white'}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Fontisto name="angle-left" size={windowWidth*0.07} color={theme==='dark'?'#fafafa':"black"} />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.08,color:theme==='dark'?'#fafafa':'black'}}> {catName}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={{uri:currentUser.profile_pic}}  />
        </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        {!loading && (<ScrollView style={{flex:1}} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            {it && it.map((food,index)=> (
                 <FoodCategoryItem data={food} key={index.toString()} />
            ))}
        </ScrollView>) }
        </View>
    
        
    </SafeAreaView>
    
    )
}

export default CategoryScreen