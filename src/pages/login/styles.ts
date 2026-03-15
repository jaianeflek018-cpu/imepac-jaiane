import { Dimensions, StyleSheet } from "react-native";
import { TextInput } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        paddingTop:50,
        borderRadius:50,
        justifyContent:"center",
        backgroundColor:'#000000',
    },
    boxTop:{
        alignItems: 'center',
        justifyContent: 'center',
        height:Dimensions.get("window").height/3,
        width:"100%"
    },
    boxMid:{
        height:Dimensions.get("window").height/3,
        width:"100%",
        marginLeft: 20,
    },
    boxBottom:{
        alignItems: 'center',
        height:Dimensions.get("window").height/3,
        width:"100%"
    },
     title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },

  label: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 6,
  },
    boxInput:{
        backgroundColor:'#9f10fe',
        marginRight: 40,
        borderRadius: 40,
        padding: 10,
    }
    
})