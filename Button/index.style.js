import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export const btnParallax = {
    magnification: 1.05,
    pressDuration: 0.3,
    shiftDistanceX: 0,
    shiftDistanceY: 2.0,
    tiltAngle: 0,
};

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
    },
    BtnIcon: {
        position: 'absolute',
        fontSize: 35,
        color: 'gray' 
    },
});

