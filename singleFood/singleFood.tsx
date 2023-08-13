import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
import styles from "./singleFoodStyles"
import SingleF from "../mocks/singleFood"

const SingleFood = () => {
    const windowWidth = Dimensions.get('window').width
    return (
        <SafeAreaView style={styles.container}>
        <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.01,paddingVertical:windowWidth*0.08}]}>
        <TouchableOpacity>
        <Image style={{width:windowWidth*0.07, height:windowWidth*0.07,borderRadius:windowWidth*0.5}} source={require('../assets/left.png')}  />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.07}}> {SingleF.name} </Text>
        <TouchableOpacity style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={require('../assets/p1.jpg')}  />
        </TouchableOpacity>
        </View>
        <ScrollView style={{flex:1}}>
        <View style={{width:windowWidth*0.97, height:windowWidth*0.82,alignSelf:'center',marginBottom:windowWidth*0.1}}>
            <Image resizeMode="cover" style={{width:'100%', height:'100%'}} source={{uri:SingleF.img}}        /></View>
        <View style={[styles.infoContainer,{}]}>
        <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold'}} >Food name </Text>
        <Text style={{fontSize:windowWidth*0.04,marginBottom:windowWidth*0.04}}>{SingleF.name}</Text>
        <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold'}}>Price</Text>
        <Text style={{fontSize:windowWidth*0.04,marginBottom:windowWidth*0.04}}>{SingleF.price}</Text>
        <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold'}}>Description</Text>
        <Text style={{fontSize:windowWidth*0.04,lineHeight:28,width:windowWidth*0.99,marginBottom:windowWidth*0.04}}> 
        {SingleF.description}
        </Text>
        <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold'}}> category </Text>
        <Text style={{fontSize:windowWidth*0.04,marginBottom:windowWidth*0.04}}> chinese </Text>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default SingleFood