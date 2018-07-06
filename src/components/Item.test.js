import React from 'react'
import { shallow } from 'enzyme'

import Item from './Item'

// We will describe a block of tests
describe('Item', () => {
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Item task={'walk the dog'} status={'incomplete'} />)
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains('walk the dog')).toBe(true)
  })
})
