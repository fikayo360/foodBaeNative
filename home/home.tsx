import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,ActivityIndicator } from "react-native"
import styles from "./homeStyles"
import React, { FC ,useEffect} from 'react';
import Popular from "../components/popular";
import popularMeals from "../mocks/popular";
import Category from "../components/category";
import categories from "../mocks/categories";
import ProfilePlaceholder from "../components/profilePlaceholder";
import useApp from "../hooks/useApp";
import HomeApi from '../api/home';
import { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import ErrorComponent from "../components/errorComponent";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { getToken } from "../utils/tokenStorage";
import Protected from "../protected";


interface food  {
    id:string;
    image:any;
    title:string;
    price:number|null;
    description:string;
    category:string;
    created_at:string;
    updated_at:string;
  } 

  const initialFoodState = {
        id: '',
        image: null,
        title: '',
        price: null,
        description: '',
        category: '',
        created_at: '',
        updated_at: ''
    }
  
    
const Home = () => {
    const  { currentUser,theme} = useApp()
    const homeApi = new HomeApi()
    const [name,setName] = useState('')
    const [foundFood,setFoundFood] = useState<food>(initialFoodState)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    const navigation = useNavigation()

    const clearError = () => {
        setError("")
      }

    const searchForFood = async () => {
        try{
            if (!name){
                setError('fields cannot be empty')
                setLoading(false)
                return
            }
            setLoading(true)
            const response = await homeApi.searchFood(name)
            setLoading(false)
            console.log(response.data);
            setFoundFood(response.data)
            console.log(foundFood);
            setName('')
        }catch(err){
            setLoading(false)
            if (axios.isAxiosError(err)) {
                console.log(err.response?.data)
                setError(err.response?.data)
              }
        }
    }

    const windowWidth:number = Dimensions.get('window').width;

    return (
        
        <ScrollView style={[styles.container,{backgroundColor:theme==='dark'?'#1e1e1e':'white'}]}>

            {error !== "" && (<ErrorComponent text={error} clearError={clearError}/>)}
            {loading && <ActivityIndicator size='large' color="black" style={{position:'absolute',zIndex:2,left:'50%',top:'10%'}}/>}
            <View style={[styles.firstRow,{paddingTop:windowWidth*0.1}]}>
                <Text style={{fontSize:windowWidth*0.04,marginRight:windowWidth*0.02,color:theme==='dark'?'#fafafa':'black'}}>{`welcome, ${currentUser.username}`}</Text>
                <Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/smiley.png')}  />
            </View>

            <View style={[styles.secondRow,{paddingHorizontal:windowWidth*0.02,marginTop:windowWidth*0.03}]}>
                <Text style={[styles.secondRowTxt,{fontSize:windowWidth*0.085,lineHeight:40,color:theme==='dark'?'#fafafa':'black'}]}>find you next meal near you</Text>
                {currentUser.profile_pic?( <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{width:windowWidth*0.16,
                    height:windowWidth*0.16,position:"relative"}}>
                    <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5,borderWidth:0.5,borderColor:'black'}} source={{uri:currentUser.profile_pic}}  />
                </TouchableOpacity>):<ProfilePlaceholder username={currentUser.username} width={windowWidth*0.16} height={windowWidth*0.16} />
                }
            </View>

            <View style={[styles.inputContainer,{height:windowWidth*0.15,borderRadius:windowWidth*0.04,paddingHorizontal:windowWidth*0.03,marginTop:windowWidth*0.05,
                borderColor:theme==='dark'?'#fafafa':'black'}]}>
            <MaterialIcons name="search" size={windowWidth*0.05} color={theme==='dark'?'#fafafa':'black'} />
            <TextInput style={{fontSize:windowWidth*0.05,marginLeft:windowWidth*0.02,width:'75%',color:theme==='dark'?'#fafafa':'black'}}
             value={name} onChangeText={text => setName(text)} placeholder="search" placeholderTextColor={theme==='dark'?'#fafafa':'black'}/>
              <TouchableOpacity onPress={searchForFood} style={{width:windowWidth*0.05, height:windowWidth*0.05,marginRight:windowWidth*0.02}}>
              <FontAwesome name="paper-plane" size={windowWidth*0.05} color={theme==='dark'?'#fafafa':'black'}  /></TouchableOpacity>
            </View>

            {
                foundFood.id !== '' && (
               <View style={[styles.foundItem,{marginTop:windowWidth*0.04,height:windowWidth*0.7,borderBottomColor:theme==='dark'?'#fafafa':'black',borderBottomWidth:1,backgroundColor:theme==='dark'?'#1e1e1e':'white'}]}>
               <TouchableOpacity onPress={() => setFoundFood(initialFoodState)} style={[{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5,position:'absolute',zIndex:2,right:0}]} >
               <Image style={[{width:'100%', height:'100%',borderRadius:windowWidth*0.5}]} 
               source={require('../assets/close.png')}  />
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate('SingleFood',{foodData:foundFood})} style={{width:'100%', height:'80%'}}>
                <Image style={{width:'100%', height:'100%'}} source={{uri:foundFood.image}}  /></TouchableOpacity>
               <View>
               <Text style={{fontSize:windowWidth*0.04,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>{foundFood.title}</Text>
               <Text style={{fontSize:windowWidth*0.04,color:theme==='dark'?'#fafafa':'black'}}>{foundFood.price}</Text>
               </View>
               </View>)
            }

            <View style={[styles.popularContainer,{marginTop:windowWidth*0.04,height:windowWidth*0.6}]}>
                <Text style={{fontSize:windowWidth*0.05,fontWeight:"bold",marginBottom:windowWidth*0.03,color:theme==='dark'?'#fafafa':'black'}}>Popular</Text>
                <ScrollView  style={{width:'100%'}} horizontal={true} showsHorizontalScrollIndicator={false}>
                
                {popularMeals.length > 0 && popularMeals.map((meal,index)=> (
                    <Popular data={meal} key={index.toString()}/>
                ))}
                
                </ScrollView>
                
            </View>
            <View style={{flex:1,marginBottom:windowWidth*0.3}}>
            <Text style={{fontSize:windowWidth*0.05,fontWeight:"bold",marginBottom:windowWidth*0.03,marginLeft:windowWidth*0.02,marginTop:windowWidth*0.03,color:theme==='dark'?'#fafafa':'black'}}>Categories</Text>
            {
                categories.length > 0 && categories.map((item,index) => (
                    <Category data={item} key={index.toString()}/>
                ))
            }
         
            </View>
           
        </ScrollView>
    )
}

export default Home