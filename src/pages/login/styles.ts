import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        paddingTop:50,
        justifyContent:"center",
        backgroundColor:"rgb(239, 135, 227)",
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
    boxInput:{
        backgroundColor:"#f6bcec",
        marginRight: 40,
        borderRadius: 40,
        padding: 10,
    }
})