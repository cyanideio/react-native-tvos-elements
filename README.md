```
___ _  _ ____ ____    ____ _    ____ _  _ ____ _  _ ___ ____
 |  |  | |  | [__     |___ |    |___ |\/| |___ |\ |  |  [__ 
 |   \/  |__| ___]    |___ |___ |___ |  | |___ | \|  |  ___]
                                                            
```

[![CircleCI](https://circleci.com/gh/cyanideio/react-native-tvos-elements/tree/dev.svg?style=shield)](https://circleci.com/gh/cyanideio/react-native-tvos-elements/tree/dev) [![codecov](https://codecov.io/gh/cyanideio/react-native-tvos-elements/branch/dev/graph/badge.svg)](https://codecov.io/gh/cyanideio/react-native-tvos-elements) [![npm version](https://badge.fury.io/js/react-native-tvos-elements.svg)](https://badge.fury.io/js/react-native-tvos-elements) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React Native Basic Elements for tvOS

## Prerequisites 
1. Install `react-native-vector-icons`

Note: You must manually add vector icons into your project

## Installation
```bash
npm install --save react-native-tvos-elements
```

## Example
```javascript
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TvOSButton } from 'react-native-tvos-elements';

export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <TvOSButton 
                    txtStyleFocused={{color:'green'}}
                    title='Steam' 
                    titleAlign='left' 
                    iconType='Ionicons' 
                    iconName='ios-person' /> 
                <TvOSButton 
                    title='Bitcoin' 
                    titleAlign='right' 
                    iconAlign='left' 
                    iconType='FontAwesome' 
                    iconName='btc' />
                <TvOSButton 
                    txtStyleFocused={{color:'red'}}
                    txtStyleUnfocused={{color:'black'}}
                    title='Settings' />
                <TvOSButton 
                    title='Ethereum' 
                    iconType='MaterialCommunityIcons' 
                    iconName='ethereum' />
            </View>
        );
    }
}
```
