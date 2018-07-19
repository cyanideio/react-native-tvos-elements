import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TvOSButton from '../../button';

describe('TvOSButton Component', () => {
    it('should render without issues', () => {
        const component = shallow(<TvOSButton title='bitcoin' />);
        expect(component.length).toBe(1);
    });
});
