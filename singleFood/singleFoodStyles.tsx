import { StyleSheet } from 'react-native';

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
    infoContainer:{
        width:'98%',
        alignSelf:'center'
    },
    btn:{
        width:'95%',
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'#002642'
      }
})

export default styles