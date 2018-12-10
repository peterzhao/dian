import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Product from '../product'

test('Product', () => {
    const wrapper = shallow(<Product name={'boo'} price={150}/>)
    expect(wrapper.find('.name').text()).to.equal('boo')
    expect(wrapper.find('.price').text()).to.equal('150')
})

