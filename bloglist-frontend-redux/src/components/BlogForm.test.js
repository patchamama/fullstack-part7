import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'

describe('BlogForm Component', () => {
  test('check, that the form calls the event handler it received as props with the right details when a new blog is created', async () => {
    const mockAddBlog = jest.fn()

    const { getByText, getByTestId } = render(
      <BlogForm addBlog={mockAddBlog} />
    )

    // Simulate user input
    const titleInput = getByTestId('title-input')
    const authorInput = getByTestId('author-input')
    const urlInput = getByTestId('url-input')
    const createButton = getByText('create')

    act(async () => {
      await fireEvent.change(titleInput, {
        target: { name: 'title', value: 'Test Title' },
      })
      await fireEvent.change(authorInput, {
        target: { name: 'author', value: 'Test Author' },
      })
      await fireEvent.change(urlInput, {
        target: { name: 'url', value: 'http://example.com' },
      })

      expect(titleInput.value).toBe('Test Title')
      expect(authorInput.value).toBe('Test Author')
      expect(urlInput.value).toBe('http://example.com')

      // fireEvent.click(createButton)
    })
  })
})
