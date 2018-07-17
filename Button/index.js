import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import tvStyle, { btnParallax } from './index.style';

export default class TvOSButton extends Component<Props> {
    state = { focused: false }

    render() {
        const { 
            title, 
            titleAlign,
            iconAlign,
            iconType, 
            iconName,
            buttonStyleFocused,
            buttonStyleUnfocused,
            txtStyleFocused,
            txtStyleUnfocused,
            iconStyle,
        } = this.props;

        return (
            <View>
                <TouchableHighlight
                    onPress={() => {}}
                    underlayColor='transparent'
                    tvParallaxProperties={btnParallax}
                    onShowUnderlay={() => {this.setState({focused: true})}}
                    onHideUnderlay={() => {this.setState({focused: false})}}>
                    <View
                        style={[
                            tvStyle.Btn, 
                            flexAlign(titleAlign),                                
                            this.state.focused ? tvStyle.BtnFocused : tvStyle.BtnUnfocused,
                            this.state.focused ? buttonStyleFocused : buttonStyleUnfocused,
                        ]}>
                        <Text style={[
                            tvStyle.BtnTxt, 
                            this.state.focused ? tvStyle.BtnTxtFocused : tvStyle.BtnTxtUnfocused,
                            this.state.focused ? txtStyleFocused : txtStyleUnfocused,
                        ]}>
                            {title ? title : 'ButtonTitle'}
                        </Text>
                        <Icon 
                            iconType={iconType} 
                            iconName={iconName} 
                            iconAlign={iconAlign}
                            iconStyle={iconStyle}
                        /> 
                    </View>
                </TouchableHighlight>           
            </View>
        );
    }
}
