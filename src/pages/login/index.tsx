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
                <Text></Text>
            </View>
            <View style={style.boxMid}>
                <Text>Endereço de E-mail:</Text>
                <TextInput style={style.boxInput}/>
                <Text>Coloque sua senha:</Text>
                <TextInput style={style.boxInput}/>
            </View>
            <View style={style.boxBottom}>
                <Text>Bottom</Text>
            </View>
        </View>        

    )
}