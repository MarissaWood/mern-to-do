import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'

import List from './List'
import Item from './Item'

describe('<List />', () => {
  let component
  // called before every test
  beforeEach(() => {
    component = mount(<List />)
  })

  it('calls componentDidMount', () => {
    sinon.spy(List.prototype, 'componentDidMount')
    expect(List.prototype.componentDidMount.calledOnce).to.equal(true)
  })

  // add tests here
  it('Should fetch results from back end api', () => {
    expect(component.find(Item).length).toBeGreaterThan(0)
  })

  it('should have a header that says "To Do List:"', () => {
    expect(component.contains(<h1>To Do List: </h1>)).toBe(true)
  })
})
