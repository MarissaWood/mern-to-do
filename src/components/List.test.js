import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import List from './List'
import Item from './Item'

describe('<List />', () => {
  let component
  // let taskList = [
  //   {
  //     task: 'walk the dog',
  //     status: 'incomplete'
  //   },
  //   {
  //     task: 'wash the dishes',
  //     status: 'incomplete'
  //   }
  // ]
  // called before every test
  beforeEach(() => {
    component = shallow(<List />)
  })

  // it('calls componentDidMount', () => {
  //   sinon.spy(List.prototype, 'componentDidMount')
  //   expect(List.prototype.componentDidMount.calledOnce).to.equal(true)
  // })

  // // add tests here
  // it('Should fetch results from back end api', () => {
  //   expect(component.find(Item).length).toBeGreaterThan(0)
  // })

  it('should have a header that says "To Do List:"', () => {
    expect(component.contains(<h1>To Do List: </h1>)).toBe(true)
  })
})
