import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
import styles from "./singleFoodStyles"
import SingleF from "../mocks/singleFood"
import { useEffect,useState } from "react"
import useApp from "../hooks/useApp";
import { useNavigation } from "@react-navigation/native";
import NotificationAlert from "../components/notificationComponent";
import { Fontisto } from '@expo/vector-icons';

const SingleFood = ({route}:any) => {
    const navigation = useNavigation()
    const {cartItems,addToCart,removeFromCart,currentUser,theme} = useApp()
    const windowWidth = Dimensions.get('window').width
    const {foodData} = route.params
    const [notification,setNotification] = useState("")
    const updatedFoodData = {
        ...foodData,
        quantity: 1
      };
    useEffect(()=>{
        console.log(updatedFoodData);
    },[])

    const addItemsCart = () => {
         addToCart(updatedFoodData)
         setNotification('item added')
    }

    const clearNotification = () => {
        setNotification("")
      }
    
    return (
     
        <SafeAreaView style={[styles.container,{backgroundColor:theme==='dark'?'#1e1e1e':'white'}]}>
         {notification !== "" && (<NotificationAlert text={notification} clearNotification={clearNotification}/>)}
        <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.01,paddingVertical:windowWidth*0.08, backgroundColor:theme==='dark'?'#282a2b':'white'}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Fontisto name="angle-left" size={windowWidth*0.07} color={theme==='dark'?'#fafafa':"black"} />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.07,color:theme==='dark'?'#fafafa':'black'}}> {foodData.title} </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={{uri:currentUser.profile_pic}}   />
        </TouchableOpacity>
        </View>
        <ScrollView style={{flex:1}}>
        <TouchableOpacity style={{width:windowWidth*0.97, height:windowWidth*0.82,alignSelf:'center',marginBottom:windowWidth*0.1}}>
            <Image resizeMode="cover" style={{width:'100%', height:'100%'}} source={{uri:foodData.image}}/>
        </TouchableOpacity>
        <View style={[styles.infoContainer]}>
        <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}} >Food name </Text>
        <Text style={{fontSize:windowWidth*0.04,marginBottom:windowWidth*0.04,color:theme==='dark'?'#fafafa':'black'}}>{foodData.title}</Text>
        <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>Price</Text>
        <Text style={{fontSize:windowWidth*0.04,marginBottom:windowWidth*0.04,color:theme==='dark'?'#fafafa':'black'}}>{foodData.price}</Text>
        <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>Description</Text>
        <Text style={{fontSize:windowWidth*0.04,lineHeight:28,width:windowWidth*0.99,marginBottom:windowWidth*0.04,color:theme==='dark'?'#fafafa':'black'}}> 
        {foodData.description}
        </Text>
        <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}> category </Text>
        <Text style={{fontSize:windowWidth*0.04,marginBottom:windowWidth*0.04,color:theme==='dark'?'#fafafa':'black'}}> {foodData.category} </Text>
        </View>
        <TouchableOpacity onPress={addItemsCart} 
        style={[styles.btn,{height:windowWidth*0.20,borderRadius:windowWidth*0.03,paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.04}]}>
            <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:'white'}}>Add to cart</Text>
        </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
       
    )
}

export default SingleFood