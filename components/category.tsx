import React, { FC } from 'react';
import { View,Image,Text,Dimensions,TouchableOpacity } from 'react-native';
import styles from '../componentStyles/categoryStyles';
import { useNavigation } from '@react-navigation/native';
import useApp from '../hooks/useApp';

type category = {
    name:string;
    img:any
}
interface PopularProps {
    data: category;
  };


const Category = ({data}:PopularProps) => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width
    const {theme} = useApp()

    return(
        <View style={[styles.container,{width:windowWidth*0.95,height:windowWidth*0.7,marginBottom:windowWidth*0.04,borderColor:theme==='dark'?'#fafafa':'black'}]}>
            <View style={styles.top}>
            <Image style={{width:'100%', height:'100%'}} resizeMode="cover" source={{uri:data.img}}    />
            </View>
            <View style={[styles.bottom,{paddingHorizontal:windowWidth*0.03}]}>
                <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>{data.name}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('CategoryScreen',{catName:data.name}) } style={[styles.arrowBox,{width:windowWidth*0.2,height:windowWidth*0.08}]}> 
                    <Image style={{width:windowWidth*0.06, height:windowWidth*0.06}} source={require('../assets/right.png')}  />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Category