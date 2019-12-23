import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

it ("contains 3 NavLinks via shallow", () => {
    const numLiks = shallow(<Header />).find('NavLink').length;
    expect(numLiks).toEqual(3);
});

it ("contains 3 archors via mount", () => {
    const numArchors = mount(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ).find('a').length;

    expect(numArchors).toEqual(3);
});