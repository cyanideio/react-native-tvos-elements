import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TvOSButton from '../../button';

describe('TvOSButton Component', () => {
    it('should render: <title only>', () => {
        const component = shallow(<TvOSButton title='bitcoin' />);
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render: <icon left>', () => {
        const component = shallow(<TvOSButton 
            txtStyleFocused={{color:'green'}}
            title='Steam' 
            titleAlign='left' 
            iconType='Ionicons' 
            iconName='ios-person' />);
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render: <custom text style>', () => {
        const component = shallow(<TvOSButton
            txtStyleFocused={{color:'red'}}
            txtStyleUnfocused={{color:'black'}}
            title='Settings' />);
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should have onPress event', () => {
        const onPress = jest.fn();
        const component = shallow(<TvOSButton
            txtStyleFocused={{color:'red'}}
            txtStyleUnfocused={{color:'black'}}
            onPress={onPress}
            title='press' />);
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
    });

});
