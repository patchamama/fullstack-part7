import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Togglable from './Togglable'

describe('<Togglable tests>', () => {
  const buttonLabel = 'show'
  let component
  const clickLikes = jest.fn()

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel={buttonLabel}>
        <div className='testDiv'>testDivContent</div>
      </Togglable>
    )
  })

  test('renders its children', () => {
    expect(component.container.querySelector('.testDiv')).toBeDefined()
  })

  test('renders its children but they are not visible', () => {
    const el = component.getByText('testDivContent')
    expect(el.parentNode).toHaveStyle('display: none')
  })

  test('after clicking its children must be shown', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)
    const el = component.getByText('testDivContent')
    expect(el.parentNode).not.toHaveStyle('display: none')
  })

  test('toggled content can be closed', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)
    const el = component.getByText('testDivContent')
    expect(el.parentNode).not.toHaveStyle('display: none')
    const closeButton = component.getByText('cancel')
    fireEvent.click(closeButton)
    expect(el.parentNode).toHaveStyle('display: none')
  })
})
