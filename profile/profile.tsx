import styles from './profileStyles';
import Protected from "../protected";
import { ScrollView,View,Text,Image,TextInput,Dimensions,TouchableOpacity,SafeAreaView,Switch } from "react-native"
import useApp from "../hooks/useApp";
import ProfilePlaceholder from "../components/profilePlaceholder";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AuthApi from '../api/authApp';
import axios from 'axios';
import ErrorComponent from '../components/errorComponent';
import NotificationAlert from '../components/notificationComponent';
import uploadImageToFirebase from '../utils/uploadImage';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';

const Profile = () => {
    const windowWidth = Dimensions.get('window').width
    const [newProfilePic,setNewProfilePic] = useState('')
    const [isEnabled, setIsEnabled] = useState(false); 
    const [error,setError] = useState("")
    const [notification,setNotification] = useState("")
    const navigation = useNavigation()
    const {currentUser,updateProfilePic,theme,toggleTheme} = useApp()
    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
      toggleTheme()
  };
    const Auth = new AuthApi()

    const clearNotification = () => {
        setNotification("")
      }

    const clearError = () => {
        setError("")
      }

      const handleImageSelection = async () => {
        try {
          const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (!permissionResult.granted) {
            throw new Error('Permission to access media library was denied');
          }
      
          const pickerResult = await ImagePicker.launchImageLibraryAsync();
          if (!pickerResult.canceled) {
            setNewProfilePic(pickerResult.uri)
          }
        } catch (error) {
          console.log('Error selecting image:', error);
        }
      }
      
      const requestMediaLibraryPermissions = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission denied!');
        }
      };

      requestMediaLibraryPermissions();

      const update = async() => {
        try {
          const uri = await uploadImageToFirebase(newProfilePic)
          console.log(uri);
            // .then(
            //   async (downloadURL:any) => {
            //     const response = await Auth.UpdateProfilePic({ newProfilePic: downloadURL });
            //     console.log(response.data);
            //     updateProfilePic(newProfilePic);
            //     setNotification(response.data);
            //     setNewProfilePic('');
            //   }
            // )
        } catch (err) {
          if (axios.isAxiosError(err)) {
            console.log(err.response?.data);
            setError(err.response?.data);
          }
        }
      };

    
    return (
            <SafeAreaView style={{flex:1,backgroundColor:theme==='dark'?'#1e1e1e':'white'}}>
             {error !== "" && (<ErrorComponent text={error} clearError={clearError}/>)}
             {notification !== "" && (<NotificationAlert text={notification} clearNotification={clearNotification}/>)}
            <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,marginBottom:windowWidth*0.01,paddingVertical:windowWidth*0.08,
              backgroundColor:theme==='dark'?'#282a2b':'white'}]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Fontisto name="angle-left" size={windowWidth*0.07} color={theme==='dark'?'#fafafa':"black"} />
            </TouchableOpacity>
            <Text style={{fontSize:windowWidth*0.07,marginLeft:windowWidth*0.27,color:theme==='dark'?'#fafafa':'black' }}> Profile </Text>
           </View>

           <View style={{flex:1}}>

           <View style={[styles.firstRow,{paddingHorizontal:windowWidth*0.03}]}>
            <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}} >Personal details</Text>
           </View>

           <View style={[styles.containerBody,{borderRadius:windowWidth*0.03,marginTop:windowWidth*0.03,padding:windowWidth*0.02,marginBottom:windowWidth*0.1,
            backgroundColor:theme==='dark'?'#1e1e1e':'white'}]}>
            <View style={{backgroundColor:theme==='dark'?'#1e1e1e':'white'}}> 
            {newProfilePic?( <TouchableOpacity onPress={handleImageSelection} style={{width:windowWidth*0.30,height:windowWidth*0.30,position:"relative"}}>
                    <Image style={{width:'100%', height:'100%',borderRadius:windowWidth*0.5}} source={{uri:newProfilePic}}  />
                </TouchableOpacity>):<TouchableOpacity  onPress={handleImageSelection} style={{width:windowWidth*0.30,height:windowWidth*0.30,position:"relative"}}>
                <MaterialCommunityIcons name="camera" size={windowWidth*0.3} color={theme==='dark'?'#fafafa':"black"} />
                </TouchableOpacity>
                }
            </View>
            <View style={{width:'60%',height:'100%',marginLeft:windowWidth*0.03}}>
                <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',marginBottom:windowWidth*0.04,color:theme==='dark'?'#fafafa':'black'}}>{currentUser.username}</Text>
                <Text style={{fontSize:windowWidth*0.04,fontWeight:'bold',marginBottom:windowWidth*0.10,color:theme==='dark'?'#fafafa':'black'}}>{currentUser.email}</Text>
                <TouchableOpacity onPress={update} style={{width:'95%',height:windowWidth*0.145,
                borderRadius:windowWidth*0.03,justifyContent:'center',alignItems:'center',alignSelf:'center',backgroundColor:theme==='dark'?'white':'black'}}>
                <Text style={{fontSize:windowWidth*0.03,color:theme==='dark'?'black':'white',fontWeight:'bold'}}>Edit profile pic</Text>
                </TouchableOpacity>
            </View>
           </View>

           <View style={[styles.Togglecontainer,{padding:windowWidth*0.03,borderRadius:windowWidth*0.03,backgroundColor:theme==='dark'?'#1e1e1e':'white'}]}>
           <Text style={{fontSize:windowWidth*0.06,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>Toggle Theme</Text>
            <View style={{width:'98%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',marginTop:windowWidth*0.03}}>
            <Text style={{fontSize:windowWidth*0.05,fontWeight:'bold',color:theme==='dark'?'#fafafa':'black'}}>DarkMode</Text>
            <Switch
            trackColor={{ false: '#767577', true: '#6153CC' }}
            thumbColor={isEnabled ? '#A60067' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
            </View>
           </View>

           </View>
           
            </SafeAreaView>
        
    )
}

export default Profile