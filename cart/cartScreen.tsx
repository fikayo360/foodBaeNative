import styles from "./cartScreenStyles";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
import useApp from "../hooks/useApp";
import { useState,useEffect,useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import NotificationAlert from "../components/notificationComponent";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface food  {
    id:string;
    image:any;
    title:string;
    price:number;
    description:string;
    category:string;
    quantity:number;
    created_at:string;
    updated_at:string;
  }

const CartScreen = ( ) => {
    const navigation = useNavigation()
    const windowWidth = Dimensions.get('window').width
    const {cartItems,addToCart,removeFromCart,updateQuantity,deleteQuantity,setTottalValue,totalValue,currentUser,setNewAddress,address,theme} = useApp()
    const [newAddress,setAddress] = useState('')
    const [items,setItems] = useState<food[]>([])
    const [notification,setNotification] = useState("")

    const removeItemfromCart = (title:string) => {
        removeFromCart(title)
        setItems(items.filter(item => item.title === title))
     }

     const increaseCount = (productTitle:string) => {
       updateQuantity(productTitle)
       console.log('1 added ');
     }

     const decreaseCount = (productTitle:string) => {
       deleteQuantity(productTitle)
       console.log('1 subtracted ');
     }

     const totalItemsCost = useCallback(() => {
        const totalSum = cartItems.reduce((acc, currentValue) => acc + currentValue.price * currentValue.quantity, 0)
        setTottalValue(totalSum)
      },[cartItems])

    useEffect(() => {
        setItems([...cartItems]);
      }, [cartItems]); 
      
    useEffect(()=> {
        totalItemsCost()
    },[cartItems])
    
    const clearNotification = () => {
        setNotification("")
      }

      const setAdd = () => {
        if (!newAddress){
            setNotification('pls enter your home address')
            return
        }
        setNewAddress(newAddress)
        setAddress('')
        setNotification('address saved successfully')
        console.log(address);
      }

      const toCheckOut = () => {
        if (totalValue > 0){
            navigation.navigate('Checkout')
        }else{
            setNotification('amount cant be zero')
            return
        }
      }

    return (
      
        <ScrollView style={{flex:1,backgroundColor:theme==='dark'?'#1e1e1e':'white',}}>
             {notification !== "" && (<NotificationAlert text={notification} clearNotification={clearNotification}/>)}
             
        <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.07,paddingVertical:windowWidth*0.08,backgroundColor:theme==='dark'?'#282a2b':'white'}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Fontisto name="angle-left" size={windowWidth*0.07} color={theme==='dark'?'#fafafa':"black"} />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.08,color:theme==='dark'?'#fafafa':'black'}}> Cart </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={{uri:currentUser.profile_pic}}  />
        </TouchableOpacity>
        </View>

        <View style={[styles.addressContainer,{paddingLeft:windowWidth*0.02,marginBottom:windowWidth*0.05}]}>
            <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',marginBottom:windowWidth*0.03,color:theme==='dark'?'#fafafa':'black'}} >Delivery</Text>
            <Text style={{fontSize:windowWidth*0.04,fontWeight:'bold',marginBottom:windowWidth*0.03,color:theme==='dark'?'#fafafa':'black'}}>Address details</Text>
            <TextInput
            style={[styles.inputStyles,{height:windowWidth*0.20,fontSize:windowWidth*0.04,borderRadius:windowWidth*0.03,padding:windowWidth*0.03,color:theme==='dark'?'#fafafa':'black'}]}
            multiline={true}
            numberOfLines={4}
            value={newAddress}
            onChangeText={text => setAddress(text)}
            placeholder="enter your address"
            placeholderTextColor={theme==='dark'?'#fafafa':'black'}
            />
            <TouchableOpacity onPress={setAdd} style={{width:'98%',alignSelf:'center',height:windowWidth*0.20, backgroundColor:'#002642',justifyContent:'center',alignItems:'center',
            borderRadius:windowWidth*0.03,marginTop:windowWidth*0.04}}>
                <Text style={{fontSize:windowWidth*0.05,color:'white',fontWeight:'bold'}}>save address</Text> 
             </TouchableOpacity>
        </View>

        {
          cartItems?(
            <View style={[styles.itemsContainer,{paddingLeft:windowWidth*0.015,marginBottom:windowWidth*0.05}]}>
            <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',marginBottom:windowWidth*0.03,color:theme==='dark'?'#fafafa':'black'}}>Items</Text>
           
            {items && items.map((item,index)=> (
                
                <View key={index.toString()} style={[styles.cartItems,{paddingHorizontal:windowWidth*0.03,height:windowWidth*0.23,borderRadius:windowWidth*0.03,
                marginBottom:windowWidth*0.05,borderColor:theme==='dark'?'#fafafa':'black'}]}>
                <TouchableOpacity onPress={() => removeFromCart(item.title)} style={{width:windowWidth*0.10, height:windowWidth*0.10,position:'absolute',right:'-3%',top:'-23%',justifyContent:'center',alignItems:'center'}}>
                <Ionicons name="close-circle" size={windowWidth*0.10} color={theme==='dark'?'#fafafa':"black"} />
               </TouchableOpacity>
                <Image style={{width:windowWidth*0.15, height:windowWidth*0.15,borderRadius:windowWidth*0.5,marginRight:windowWidth*0.03}} source={{uri:item.image}}/> 
                <View style={{marginRight:windowWidth*0.13}}>
                    <Text style={{fontSize:windowWidth*0.05,color:theme==='dark'?'#fafafa':'black'}}>{item.title}</Text>
                    <Text style={{fontSize:windowWidth*0.04,color:theme==='dark'?'#fafafa':'black'}}>{item.price}</Text>
                </View>
                <View style={{borderColor:theme==='dark'?'#fafafa':'black',borderWidth:0.5,flexDirection:'row',alignItems:'center',
                width:windowWidth*0.25,height:windowWidth*0.11,justifyContent:'space-between',paddingHorizontal:windowWidth*0.017,borderRadius:windowWidth*0.047,position:'absolute',top:'25%',right:25}}>
                    <TouchableOpacity onPress={() => increaseCount(item.title)}>
                    <FontAwesome name="plus" size={windowWidth*0.07} color = {theme==='dark'?'#fafafa':'black'} />
                    </TouchableOpacity>
                    <Text style={{fontSize:windowWidth*0.04,color:theme==='dark'?'#fafafa':'black'}}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => decreaseCount(item.title)}>
                    <FontAwesome name="minus" size={windowWidth*0.07} color = {theme==='dark'?'#fafafa':'black'} />
                    </TouchableOpacity>
                </View>
                </View>
           ))}
            
        </View>
          ):(
            <View style={{width:'95%',alignSelf:'center',height:windowWidth*0.6,justifyContent:'center',alignItems:'center',marginTop:windowWidth*0.7}}>
                <MaterialIcons name="error" size={windowWidth*0.6} color={theme==='dark'?'#fafafa':"black"} />
                <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold'}}>NO ITEMS FOUND </Text>
                </View>
          )
        }
        
  
        <View style={[styles.totalContainer,{paddingHorizontal:windowWidth*0.02,height:windowWidth*0.1,marginBottom:windowWidth*0.06}]}>
            <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>Total</Text>
            <Text style={{fontSize:windowWidth*0.06,color:theme==='dark'?'#fafafa':'black'}}>{totalValue}</Text>
        </View>

        <TouchableOpacity onPress={toCheckOut} style={[styles.btn,{height:windowWidth*0.18,borderRadius:windowWidth*0.03,
            paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.6}]}>
            <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:'white'}}>Checkout</Text>
            <Text style={{fontSize:windowWidth*0.06,color:'white'}}>{totalValue}</Text>
        </TouchableOpacity>
        </ScrollView>
    )
}

export default CartScreen