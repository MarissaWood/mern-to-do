import React from 'react'
import { shallow } from 'enzyme'
import NewItem from './NewItem'

describe('New Item component', () => {
  let component
  beforeEach(() => {
    component = shallow(<NewItem />)
  })

  // add the rest of the tests here
  it('should have a header that says "Add a To-Do Item:"', () => {
    expect(component.contains(<h1>Add a To-Do Item:</h1>)).toBe(true)
  })
})