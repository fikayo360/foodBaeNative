import styles from "./cartScreenStyles";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"

const CartScreen = ( ) => {
    const windowWidth = Dimensions.get('window').width
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

            <View style={[styles.cartItems,{paddingHorizontal:windowWidth*0.03,height:windowWidth*0.23,borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.03}]}>
            <Image style={{width:windowWidth*0.15, height:windowWidth*0.15,borderRadius:windowWidth*0.5,marginRight:windowWidth*0.03}} source={require('../assets/p1.jpg')}  />
            <View style={{marginRight:windowWidth*0.13}}>
                <Text style={{fontSize:windowWidth*0.05}}>Foodname</Text>
                <Text style={{fontSize:windowWidth*0.04}}>1,200</Text>
            </View>
            <View style={{borderColor:'black',borderWidth:0.5,flexDirection:'row',alignItems:'center',
            width:windowWidth*0.3,height:windowWidth*0.13,justifyContent:'space-between',paddingHorizontal:windowWidth*0.015,borderRadius:windowWidth*0.047}}>
                <TouchableOpacity>
                <Image style={{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5}} source={require('../assets/plus.png')}  />
                </TouchableOpacity>
                <Text style={{fontSize:windowWidth*0.04}}>3</Text>
                <TouchableOpacity>
                <Image style={{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5}} source={require('../assets/minus.png')}  />
                </TouchableOpacity>
            </View>
            </View>

            <View style={[styles.cartItems,{paddingHorizontal:windowWidth*0.03,height:windowWidth*0.23,borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.03}]}>
            <Image style={{width:windowWidth*0.15, height:windowWidth*0.15,borderRadius:windowWidth*0.5,marginRight:windowWidth*0.03}} source={require('../assets/p1.jpg')}  />
            <View style={{marginRight:windowWidth*0.13}}>
                <Text style={{fontSize:windowWidth*0.05}}>Foodname</Text>
                <Text style={{fontSize:windowWidth*0.04}}>1,200</Text>
            </View>
            <View style={{borderColor:'black',borderWidth:0.5,flexDirection:'row',alignItems:'center',
            width:windowWidth*0.3,height:windowWidth*0.13,justifyContent:'space-between',paddingHorizontal:windowWidth*0.015,borderRadius:windowWidth*0.047}}>
                <TouchableOpacity>
                <Image style={{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5}} source={require('../assets/plus.png')}  />
                </TouchableOpacity>
                <Text style={{fontSize:windowWidth*0.04}}>3</Text>
                <TouchableOpacity>
                <Image style={{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5}} source={require('../assets/minus.png')}  />
                </TouchableOpacity>
            </View>
            </View>

            <View style={[styles.cartItems,{paddingHorizontal:windowWidth*0.03,height:windowWidth*0.23,borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.03}]}>
            <Image style={{width:windowWidth*0.15, height:windowWidth*0.15,borderRadius:windowWidth*0.5,marginRight:windowWidth*0.03}} source={require('../assets/p1.jpg')}  />
            <View style={{marginRight:windowWidth*0.13}}>
                <Text style={{fontSize:windowWidth*0.05}}>Foodname</Text>
                <Text style={{fontSize:windowWidth*0.04}}>1,200</Text>
            </View>
            <View style={{borderColor:'black',borderWidth:0.5,flexDirection:'row',alignItems:'center',
            width:windowWidth*0.3,height:windowWidth*0.13,justifyContent:'space-between',paddingHorizontal:windowWidth*0.015,borderRadius:windowWidth*0.047}}>
                <TouchableOpacity>
                <Image style={{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5}} source={require('../assets/plus.png')}  />
                </TouchableOpacity>
                <Text style={{fontSize:windowWidth*0.04}}>3</Text>
                <TouchableOpacity>
                <Image style={{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5}} source={require('../assets/minus.png')}  />
                </TouchableOpacity>
            </View>
            </View>

            <View style={[styles.cartItems,{paddingHorizontal:windowWidth*0.03,height:windowWidth*0.23,borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.03}]}>
            <Image style={{width:windowWidth*0.15, height:windowWidth*0.15,borderRadius:windowWidth*0.5,marginRight:windowWidth*0.03}} source={require('../assets/p1.jpg')}  />
            <View style={{marginRight:windowWidth*0.13}}>
                <Text style={{fontSize:windowWidth*0.05}}>Foodname</Text>
                <Text style={{fontSize:windowWidth*0.04}}>1,200</Text>
            </View>
            <View style={{borderColor:'black',borderWidth:0.5,flexDirection:'row',alignItems:'center',
            width:windowWidth*0.3,height:windowWidth*0.13,justifyContent:'space-between',paddingHorizontal:windowWidth*0.015,borderRadius:windowWidth*0.047}}>
                <TouchableOpacity>
                <Image style={{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5}} source={require('../assets/plus.png')}  />
                </TouchableOpacity>
                <Text style={{fontSize:windowWidth*0.04}}>3</Text>
                <TouchableOpacity>
                <Image style={{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5}} source={require('../assets/minus.png')}  />
                </TouchableOpacity>
            </View>
            </View>

            <View style={[styles.cartItems,{paddingHorizontal:windowWidth*0.03,height:windowWidth*0.23,borderRadius:windowWidth*0.03,marginBottom:windowWidth*0.03}]}>
            <Image style={{width:windowWidth*0.15, height:windowWidth*0.15,borderRadius:windowWidth*0.5,marginRight:windowWidth*0.03}} source={require('../assets/p1.jpg')}  />
            <View style={{marginRight:windowWidth*0.13}}>
                <Text style={{fontSize:windowWidth*0.05}}>Foodname</Text>
                <Text style={{fontSize:windowWidth*0.04}}>1,200</Text>
            </View>
            <View style={{borderColor:'black',borderWidth:0.5,flexDirection:'row',alignItems:'center',
            width:windowWidth*0.3,height:windowWidth*0.13,justifyContent:'space-between',paddingHorizontal:windowWidth*0.015,borderRadius:windowWidth*0.047}}>
                <TouchableOpacity>
                <Image style={{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5}} source={require('../assets/plus.png')}  />
                </TouchableOpacity>
                <Text style={{fontSize:windowWidth*0.04}}>3</Text>
                <TouchableOpacity>
                <Image style={{width:windowWidth*0.06, height:windowWidth*0.06,borderRadius:windowWidth*0.5}} source={require('../assets/minus.png')}  />
                </TouchableOpacity>
            </View>
            </View>

            

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