import React, { FC } from 'react';
import { View,Image,Text,Dimensions,TouchableOpacity } from 'react-native';
import styles from '../componentStyles/categoryStyles';

type category = {
    name:string;
    img:any
}
interface PopularProps {
    data: category;
  };
const Category = ({data}:PopularProps) => {
    const windowWidth = Dimensions.get('window').width
    return(
        <View style={[styles.container,{width:windowWidth*0.95,height:windowWidth*0.7,marginBottom:windowWidth*0.05}]}>
            <View style={styles.top}>
            {/* <Image style={{width:'100%', height:'100%'}} source={{uri:data.foodImg}}  /> */}
            <Image style={{width:'100%', height:'100%'}} resizeMode="cover" source={{uri:data.img}}    />
            </View>
            <View style={[styles.bottom,{paddingHorizontal:windowWidth*0.03}]}>
                <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold'}}>{data.name}</Text>
                <TouchableOpacity style={[styles.arrowBox,{width:windowWidth*0.2,height:windowWidth*0.08}]}> 
                    <Image style={{width:windowWidth*0.06, height:windowWidth*0.06}} source={require('../assets/right.png')}  />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Category