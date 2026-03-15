import React from "react";
import{
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
import {style} from './styles';
import Logo from '../../assets/login.png';

export default function Login(){
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo}/>
                <Text style={style.title}>login</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.label}>Endereço de E-mail:</Text>
                <TextInput style={style.boxInput}/>
                <Text style={style.label}>Coloque sua senha:</Text>
                <TextInput style={style.boxInput}/>
            </View>
            <View style={style.boxBottom}>
                <Text style={style.label}>Bottom</Text>
            </View>
        </View>        

    )
}