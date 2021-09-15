import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'johan'
  }

  const component = render(
    <Blog blog={blog} />
  )
  const li = component.container.querySelector('li')

  console.log(prettyDOM(li))
})