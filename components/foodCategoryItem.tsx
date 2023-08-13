import styles from "../componentStyles/foodCategoryItemStyles";
import React, { FC } from 'react';
import { View,Image,Text,Dimensions, TouchableOpacity } from 'react-native';

type food = {
    img:any;
    name:string;
    price:number;
}

interface foodProps {
     data : food;
}

const FoodCategoryItem = ({data}:foodProps) => {
    const windowWidth:number = Dimensions.get('window').width
    return (
        <View style={[styles.container,{width:windowWidth*0.95,height:windowWidth*0.7,marginBottom:windowWidth*0.03}]}>
            <TouchableOpacity style={{width:'100%', height:'80%'}}><Image resizeMode="cover" style={{width:'100%', height:'100%'}} source={{uri:data.img}}  /></TouchableOpacity>
            <View style={[styles.bottom,{padding:windowWidth*0.01}]}>
                <Text style={{fontSize:windowWidth*0.04,fontWeight:'bold'}} >{data.name} </Text>
                <Text style={{fontSize:windowWidth*0.03}}> {data.price} </Text>
            </View>
        </View>
    )
}

export default FoodCategoryItem