import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    firstRow:{
        flexDirection:'row',
        width:'95%',
        alignSelf:'center',
        alignItems:'center'

    },
    secondRow:{
        width:'100%',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    secondRowTxt:{
        width:'70%',
    },
    inputContainer:{
        flexDirection:'row',
        width:'96%',
        alignSelf:'center',
        alignItems:'center',
        borderColor:'black',
        borderWidth:0.5,
        justifyContent:'space-between'
    },
    foundItem:{
        width:'96%',
        alignSelf:'center',
        flexDirection:'column'
    },
    popularContainer:{
        width:'96%',
        alignSelf:'center',
        flexDirection:'column'
    },
    categoryContainer:{
        width:'96%',
        alignSelf:'center',
        flexDirection:'column',
        borderColor:'black',
        borderWidth:3
    }
})

export default styles