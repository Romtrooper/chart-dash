/*global it describe expect*/

import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from './Spinner';


configure({adapter: new Adapter()});



describe('Spinner', () => {
	it('should render <Spinner />', () => {
		const wrapper = mount(<Spinner />);

		expect(wrapper).toMatchSnapshot();
	});
});