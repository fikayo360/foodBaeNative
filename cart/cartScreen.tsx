import styles from "./cartScreenStyles";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
import useApp from "../hooks/useApp";
import { useState,useEffect } from "react";

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
   
    const windowWidth = Dimensions.get('window').width
    const {cartItems,addToCart,removeFromCart,updateQuantity,deleteQuantity} = useApp()
    const [items,setItems] = useState<food[]>([])

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

    useEffect(() => {
        setItems([...cartItems]);
        console.log(items);
      }, [cartItems,increaseCount,decreaseCount]); 

    

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={{flex:1}}>
        <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.01,paddingVertical:windowWidth*0.08}]}>
        <TouchableOpacity>
        <Image style={{width:windowWidth*0.07, height:windowWidth*0.07,borderRadius:windowWidth*0.5}} source={require('../assets/left.png')}  />
        </TouchableOpacity>
        <Text style={{fontSize:windowWidth*0.07}}> Cart </Text>
        <TouchableOpacity style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
        <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={require('../assets/p1.jpg')}  />
        </TouchableOpacity>
        </View>
        <View style={[styles.addressContainer,{height:windowWidth*0.4,paddingLeft:windowWidth*0.02,marginBottom:windowWidth*0.06}]}>
            <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',marginBottom:windowWidth*0.03}} >Delivery</Text>
            <Text style={{fontSize:windowWidth*0.04,fontWeight:'bold',marginBottom:windowWidth*0.03}}>Address details</Text>
            <TextInput
            style={[styles.inputStyles,{height:windowWidth*0.20,fontSize:windowWidth*0.04,borderRadius:windowWidth*0.03,padding:windowWidth*0.03}]}
            multiline={true}
            numberOfLines={4}
            // value={token}
            // onChangeText={text => setToken(text)}
            placeholder="enter your address"
            />
        </View>
        <View style={[styles.itemsContainer,{paddingLeft:windowWidth*0.015,marginBottom:windowWidth*0.05}]}>
            <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',marginBottom:windowWidth*0.03,}}>Items</Text>

            {items && items.map((item,index)=> (
                
                 <View key={index.toString()} style={[styles.cartItems,{paddingHorizontal:windowWidth*0.03,height:windowWidth*0.23,borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.07}]}>
                 <TouchableOpacity onPress={() => removeFromCart(item.title)} style={{width:windowWidth*0.10, height:windowWidth*0.10,position:'absolute',right:'-3%',top:'-23%',justifyContent:'center',alignItems:'center'}}>
                    <Image style={[{width:'60%', height:'60%',borderRadius:windowWidth*0.5}]} source={require('../assets/close.png')}  />
                </TouchableOpacity>
                 <Image style={{width:windowWidth*0.15, height:windowWidth*0.15,borderRadius:windowWidth*0.5,marginRight:windowWidth*0.03}} source={{uri:item.image}}/> 
                 <View style={{marginRight:windowWidth*0.13}}>
                     <Text style={{fontSize:windowWidth*0.05}}>{item.title}</Text>
                     <Text style={{fontSize:windowWidth*0.04}}>{item.price}</Text>
                 </View>
                 <View style={{borderColor:'black',borderWidth:0.5,flexDirection:'row',alignItems:'center',
                 width:windowWidth*0.25,height:windowWidth*0.11,justifyContent:'space-between',paddingHorizontal:windowWidth*0.017,borderRadius:windowWidth*0.047,position:'absolute',top:'20%',right:10}}>
                     <TouchableOpacity onPress={() => increaseCount(item.title)}>
                     <Image style={{width:windowWidth*0.04, height:windowWidth*0.04,borderRadius:windowWidth*0.5}} source={require('../assets/plus.png')}  />
                     </TouchableOpacity>
                     <Text style={{fontSize:windowWidth*0.04}}>{item.quantity}</Text>
                     <TouchableOpacity onPress={() => decreaseCount(item.title)}>
                     <Image style={{width:windowWidth*0.04, height:windowWidth*0.04,borderRadius:windowWidth*0.5}} source={require('../assets/minus.png')}  />
                     </TouchableOpacity>
                 </View>
                 </View>
            ))}

          

        </View>

        <View style={[styles.totalContainer,{paddingHorizontal:windowWidth*0.02,marginBottom:windowWidth*0.05}]}>
            <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold'}}>Total</Text>
            <Text style={{fontSize:windowWidth*0.06}}>24000</Text>
        </View>

        <TouchableOpacity style={[styles.btn,{height:windowWidth*0.20,borderRadius:windowWidth*0.03,paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.06}]}>
            <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:'white'}}>Checkout</Text>
            <Text style={{fontSize:windowWidth*0.06,color:'white'}}>24000</Text>
        </TouchableOpacity>
        </ScrollView>
       
        </SafeAreaView>
    )
}

export default CartScreen