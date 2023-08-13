import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity } from "react-native"
import styles from "./homeStyles"
import React, { FC } from 'react';
import Popular from "../components/popular";
import popularMeals from "../mocks/popular";
import Category from "../components/category";
import categories from "../mocks/categories";

const Home:FC = () => {
   

    const windowWidth:number = Dimensions.get('window').width;
    return (
        <ScrollView style={[styles.container,{}]}>
            <View style={[styles.firstRow,{paddingTop:windowWidth*0.1}]}>
                <Text style={{fontSize:windowWidth*0.04,marginRight:windowWidth*0.02}}>{`welcome, ${'fikayo'}`}</Text>
                <Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/smiley.png')}  />
            </View>

            <View style={[styles.secondRow,{paddingHorizontal:windowWidth*0.02,marginTop:windowWidth*0.03}]}>
                <Text style={[styles.secondRowTxt,{fontSize:windowWidth*0.075,lineHeight:40}]}>find you next meal near you</Text>
                <TouchableOpacity style={{width:windowWidth*0.16,height:windowWidth*0.16,position:"relative"}}>
                    <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={require('../assets/p1.jpg')}  />
                </TouchableOpacity>
            </View>

            <View style={[styles.inputContainer,{height:windowWidth*0.15,borderRadius:windowWidth*0.04,paddingHorizontal:windowWidth*0.03,marginTop:windowWidth*0.05}]}>
            <Image style={{width:windowWidth*0.05, height:windowWidth*0.05}} source={require('../assets/search.png')}  />
            <TextInput style={{fontSize:windowWidth*0.05,marginLeft:windowWidth*0.02,width:'70%'}} placeholder="search" placeholderTextColor={'gray'}/>
            </View>

            <View style={[styles.popularContainer,{marginTop:windowWidth*0.04,height:windowWidth*0.6}]}>
                <Text style={{fontSize:windowWidth*0.05,fontWeight:"bold",marginBottom:windowWidth*0.03}}>Popular</Text>
                <ScrollView  style={{width:'100%'}} horizontal={true} showsHorizontalScrollIndicator={false}>
                
                {popularMeals.length > 0 && popularMeals.map((meal,index)=> (
                    <Popular data={meal} key={index.toString()}/>
                ))}
                
                </ScrollView>
                
            </View>
            <Text style={{fontSize:windowWidth*0.05,fontWeight:"bold",marginBottom:windowWidth*0.03,marginLeft:windowWidth*0.02,marginTop:windowWidth*0.03}}>Categories</Text>
            {
                categories.length > 0 && categories.map((item,index) => (
                    <Category data={item} key={index.toString()}/>
                ))
            }
         
        </ScrollView>
    )
}

export default Home