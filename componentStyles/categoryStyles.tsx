import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        
        borderWidth:0.28,
        alignSelf:'center'
    },
    top:{
        width:'100%',
        height:'80%'
    },
    bottom:{
        width:'100%',
        height:'20%',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    arrowBox:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#7D7ABC'
    }
})

export default styles