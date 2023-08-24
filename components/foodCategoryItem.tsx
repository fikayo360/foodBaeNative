import styles from "../componentStyles/foodCategoryItemStyles";
import React, { FC } from 'react';
import { View,Image,Text,Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import useApp from "../hooks/useApp";

type food = {
    id:string;
    image:any;
    title:string;
    price:number;
    description:string;
    category:string;
    created_at:string;
    updated_at:string;
}

interface foodProps {
     data : food;
}

const FoodCategoryItem = ({data}:foodProps) => {
    const windowWidth:number = Dimensions.get('window').width
    const navigation = useNavigation()
    const {theme} = useApp()
    return (
        <View style={[styles.container,{width:windowWidth*0.95,height:windowWidth*0.7,marginBottom:windowWidth*0.03,borderBottomColor:theme==='dark'?'#fafafa':'black'}]}>
            <TouchableOpacity onPress={()=>navigation.navigate('SingleFood',{foodData:data})} style={{width:'100%', height:'80%'}}>
            <Image resizeMode="cover" style={{width:'100%', height:'100%'}} source={{uri:data.image}}  /></TouchableOpacity>
            <View style={[styles.bottom,{padding:windowWidth*0.01}]}>
                <Text style={{fontSize:windowWidth*0.04,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}} >{data.title} </Text>
                <Text style={{fontSize:windowWidth*0.03,color:theme==='dark'?'#fafafa':'black'}}> {data.price} </Text>
            </View>
        </View>
    )
}

export default FoodCategoryItem