import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Icon from '../../icon';

describe('Icon Component', () => {
    it('should render without issues', () => {
        const component = shallow(<Icon 
            iconType='Ionicons' 
            iconName='ios-person' 
        />);
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
    });
});
