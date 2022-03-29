
import React from 'react'
import renderer from 'react-test-renderer'
import Layout from './Layout'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test('Render layout as expected', () => {
  const component = renderer.create(
    <Layout />,
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})