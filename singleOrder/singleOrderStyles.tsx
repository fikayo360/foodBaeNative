import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    itemsContainer:{
        width:'98%',
        alignSelf:'center',
      },
      cartItems:{
        width:'98%',
        borderColor:'black',
        borderWidth:1,
        alignItems:'center',
        flexDirection:'row'
      }
})

export default styles