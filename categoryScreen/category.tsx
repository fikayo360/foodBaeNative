import styles from "./categoryStyle";
import React, { FC } from 'react';
import { useState,useEffect } from 'react';
import { View,Text,Image,Dimensions,TouchableWithoutFeedback,ScrollView,TouchableOpacity,SafeAreaView,ActivityIndicator} from 'react-native';
import FoodCategoryItem from "../components/foodCategoryItem";
import FoodItems from '../mocks/foodCategoryItem';
import CategoryApi from "../api/categories";
import { RefreshControl } from "react-native";
import axios from "axios";

const CategoryScreen = ({route}:any) => {
    const {catName} = route.params
    const [it,setIt] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [loading,setLoading] = useState(true)
    const categoryApi = new CategoryApi()

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
    return (
    <SafeAreaView style={[styles.container,{paddingTop:windowWidth*0.1}]}>
        {loading && <ActivityIndicator size='large' color="black" style={{position:'absolute',top:'30%',left:'50%',zIndex:2}}/>}
        <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.05}]}>
        <TouchableOpacity>
        <Image style={{width:windowWidth*0.07, height:windowWidth*0.07,borderRadius:windowWidth*0.5}} source={require('../assets/left.png')}  />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.08}}> {catName}</Text>
        <TouchableOpacity style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={require('../assets/p1.jpg')}  />
        </TouchableOpacity>
        </View>
        {!loading && (<ScrollView style={{flex:1}} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            {it && it.map((food,index)=> (
                 <FoodCategoryItem data={food} key={index.toString()} />
            ))}
        </ScrollView>) }
        
    </SafeAreaView>)
}

export default CategoryScreen