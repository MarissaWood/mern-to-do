import React from 'react'
import { shallow } from 'enzyme'

import List from './List'
import Item from './Item'

describe('List Component', () => {
  let component
  // called before every test
  beforeEach(() => {
    component = shallow(<List />)
  })

  // add tests here
//   it('Should fetch results from back end api', () => {
//     expect(component.find(li).length).toBeGreaterThan(0)
//   })

  it('should have a header that says "To Do List:"', () =>{
    expect(component.contains(<h1>To Do List: </h1>)).toBe(true)
  })
})