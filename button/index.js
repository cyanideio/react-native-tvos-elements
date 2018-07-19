import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Icon from '../icon';
import { btnParallax } from '../style';
import tvStyle from './index.style';
import { flexAlign } from '../utils';

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
            onPress,
        } = this.props;

        return (
            <View>
                <TouchableHighlight
                    onPress={onPress}
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
