import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center'
    },
    firstRow:{
        width:'98%',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between'
    },
    containerBody:{
        width:'95%',
        height:'35%',
        flexDirection:'row',
        alignSelf:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'grey',
        borderWidth:0.5
    },
    Togglecontainer:{
        width:'95%',
        height:'20%',
        alignSelf:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'grey',
        borderWidth:0.5
    }
})

export default styles