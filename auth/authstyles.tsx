import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position:'relative',
        backgroundColor:'#32CD32',
        alignItems:'center',
        justifyContent:'center'
      },
      innerContainer:{
        position:'absolute',
        backgroundColor:'white',
        alignSelf:'center',
        borderWidth:2,
        borderColor:'black'
      },
      innerContainerHeaderBtn:{
        width:'50%',
        height:'100%',
        borderWidth:2,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center'

      },
      innerContainerHeaderTxt:{
        color:'black'
      },
      inputs: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height:'85%'
      },
      inputsWrap:{
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'grey'
      }
})

export default styles