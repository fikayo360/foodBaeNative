import CartScreen from "./cart/cartScreen";
import Orders from "./order/order";
import Home from "./home/home";
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity,View,Dimensions,Text } from 'react-native';
import { removeToken } from "./utils/tokenStorage";
import { getToken } from "./utils/tokenStorage";
import useApp from "./hooks/useApp";
import { useCallback } from 'react';
import { useNavigation } from "@react-navigation/native";

const TabBar = () => {
  const windowWidth = Dimensions.get('window').width
  const Tab = createBottomTabNavigator()
  const {cartItems,logout,theme} = useApp()
  const navigation = useNavigation()
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 0,
      height:'8%',
      width: '100%',
      backgroundColor:theme==='dark'?'#1e1e1e':'white',
      alignItems: 'center'
    },
  } as const;

  const remtoken = async() => {
    await removeToken()
    let cooki = await getToken()
    if (cooki === null){
      navigation.navigate('Auth')
    }
}

  return (
            <Tab.Navigator screenOptions={screenOptions} initialRouteName="home">
                <Tab.Screen name="home" component={Home} options={{
                 tabBarIcon:({focused})=>{
                  return (
                  <View>
                    <MaterialCommunityIcons name="home" size={windowWidth*0.08} color={focused?'#6153CC':theme==='dark'?'#fafafa':"black"} />
                  </View>)
                 }
                }}/>

                <Tab.Screen name="CartScreen" component={CartScreen} options={{
                 tabBarIcon:({focused})=>{
                  return (
                  <View >
                    <View style={{position:'absolute',top:-windowWidth*0.03,left:windowWidth*0.05,borderColor:'grey',
                    backgroundColor:focused?'#6153CC':theme==='dark'?'#fafafa':"black",borderWidth:1,width:windowWidth*0.065,height:windowWidth*0.065,
                    borderRadius:windowWidth*0.6,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:theme==='dark'?'black':'white',fontSize:windowWidth*0.03,fontWeight:'bold'}}>{cartItems.length}</Text></View>
                    <MaterialCommunityIcons name="cart" size={windowWidth*0.08} color={focused?'#6153CC':theme==='dark'?'#fafafa':"black"} />
                  </View>)
                 }
                }}/>

                <Tab.Screen name="Order" component={Orders} options={{
                 tabBarIcon:({focused})=>{
                  return (
                  <View>
                    <MaterialCommunityIcons name="shopping" size={windowWidth*0.08} color={focused?'#6153CC':theme==='dark'?'#fafafa':"black"} />
                  </View>)
                 }
                }}/>

                <Tab.Screen
                name="Logout"
                component={useCallback(()=> null,[])} 
                options={{
                 tabBarIcon:({focused})=>{
                  return (
                  <TouchableOpacity onPress={remtoken}>
                    <MaterialCommunityIcons name="logout" size={windowWidth*0.08} color={focused?'#6153CC':theme==='dark'?'#fafafa':"black"} />
                  </TouchableOpacity>)
                 }
                }}
              />
            </Tab.Navigator>
  )
    
}

export default TabBar