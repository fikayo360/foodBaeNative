import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#32CD32',
    flex: 1,
    position:'relative'
  },
      inner:{
        flex:1
      },
      innerContainer:{
        backgroundColor:'rgba(255, 255, 255, 0.6)',
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
        width: '100%'
      },
      inputsWrap:{
        alignSelf:'center',
        width:'95%',
        alignItems: 'center',
        flexDirection:'row',
        borderWidth:2,
        borderColor:'black'
      },
      inputStyles:{
        width:'80%'
      },
      signUpBtn:{
        backgroundColor:'#0B0033',
        width:'95%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
      },
      signUpBtnTxt:{
        color:'white'
      },
      scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
})

export default styles