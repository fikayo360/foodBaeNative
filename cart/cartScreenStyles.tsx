import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    inputStyles:{
        width:'98%',
        borderColor:'black',
        borderWidth:1
      },
      addressContainer:{
        width:'98%',
        alignSelf:'center'
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
      },
      totalContainer:{
        width:'98%',
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between'
      },
      btn:{
        width:'95%',
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'#002642'
      }
})

export default styles