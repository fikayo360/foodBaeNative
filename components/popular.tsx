import React, { FC } from 'react';
import { View,Image,Text,Dimensions } from 'react-native';
import styles from '../componentStyles/popularStyle';

type Food = {
    name: string;
    foodImg: any;
    price: number;
  };

  interface PopularProps {
    data: Food;
  };

const Popular = ({data}:PopularProps) => {
    const windowWidth:number = Dimensions.get('window').width;
    return (
        <View style={[styles.container,{width:windowWidth*0.4,height:windowWidth*0.49,marginRight:windowWidth*0.03,borderTopLeftRadius:windowWidth*0.05,borderTopRightRadius:windowWidth*0.05}]}>
            <View style={[styles.top]}>
            <Image style={{width:'100%', height:'100%',borderTopLeftRadius:windowWidth*0.05,borderTopRightRadius:windowWidth*0.05}} source={{uri:data.foodImg}}  />
            </View>
            <View style={[styles.bottom,{paddingHorizontal:windowWidth*0.02,paddingTop:windowWidth*0.01}]}>
                <Text style={{fontSize:windowWidth*0.035,fontWeight:'bold'}}>{data.name}</Text>
                <Text style={{fontSize:windowWidth*0.029}}>{data.price}</Text>
            </View>
        </View>
    )
}

export default Popular