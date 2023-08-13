import styles from "./categoryStyle";
import React, { FC } from 'react';
import { useState } from 'react';
import { View,Text,Image,Dimensions,TouchableWithoutFeedback,ScrollView,TouchableOpacity,TextInput,ActivityIndicator,SafeAreaView} from 'react-native';
import FoodCategoryItem from "../components/foodCategoryItem";
import FoodItems from '../mocks/foodCategoryItem';

const CategoryScreen = () => {
    const windowWidth = Dimensions.get('window').width
    return (
    <SafeAreaView style={[styles.container,{paddingTop:windowWidth*0.1}]}>
        <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.05}]}>
        <TouchableOpacity>
        <Image style={{width:windowWidth*0.07, height:windowWidth*0.07,borderRadius:windowWidth*0.5}} source={require('../assets/left.png')}  />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.08}}> category </Text>
        <TouchableOpacity style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={require('../assets/p1.jpg')}  />
        </TouchableOpacity>
        </View>
        <ScrollView style={{flex:1}}>
            {FoodItems && FoodItems.map((food,index)=> (
                 <FoodCategoryItem data={food} key={index.toString()} />
            ))}
        </ScrollView>
    </SafeAreaView>)
}

export default CategoryScreen