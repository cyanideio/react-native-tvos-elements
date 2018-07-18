import { StyleSheet, Dimensions } from 'react-native';
import { deviceHeight, deviceWidth } from '../style';

export default StyleSheet.create({
    Btn: {
        height: deviceHeight / 18, 
        width: deviceWidth / 3,
        marginBottom: 15,
        borderRadius: 5,
        justifyContent: 'center',
    },
    BtnFocused: {
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10, 
        },
        shadowRadius: 10,
        shadowOpacity: 0.8, 
    },
    BtnUnfocused: {
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    BtnTxt: {
        fontSize: 30,
        marginLeft: 15,
        marginRight: 15,
    },
    BtnTxtFocused: {
        color: 'black'
    },
    BtnTxtUnfocused: {
        color: 'white'
    }
});

