import styles from "./profileStyles";
import Protected from "../protected";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView } from "react-native"
const Profile = () => {
    const windowWidth = Dimensions.get('window').width
    return (
        
            <SafeAreaView style={{flex:1}}>
            <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.01,paddingVertical:windowWidth*0.08}]}>
            <TouchableOpacity>
            <Image style={{width:windowWidth*0.07, height:windowWidth*0.07,borderRadius:windowWidth*0.5}} source={require('../assets/left.png')}  />
            </TouchableOpacity>
            <Text style={{fontSize:windowWidth*0.07}}> Profile </Text>
            <TouchableOpacity style={{width:windowWidth*0.1,height:windowWidth*0.1,position:"relative"}}>
            <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={require('../assets/p1.jpg')}  />
            </TouchableOpacity>
           </View>
            </SafeAreaView>
        
    )
}

export default Profile