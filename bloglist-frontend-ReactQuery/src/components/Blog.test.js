import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

describe('<Blog tests>', () => {
  let component
  const clickLikes = jest.fn()

  beforeEach(() => {
    // const [blogs, setBlogs] = useState([])
    let blogs = []
    const setBlogs = (newblog) => {
      blogs = newblog
      console.log(newblog)
    }

    const setNotificationMsg = (msg) => {
      console.log(msg)
    }
    const blog = {
      id: 'fsfsfsfsfsafsfs',
      title: 'Title of the blog',
      author: 'Matti Luukkainen',
      url: 'https://fullstackopen.com/en/part5',
      likes: 5,
      user: {
        username: 'mluukkai',
        name: 'Luukkainen',
        id: 'fsfsfsfsfsafsfs',
      },
    }

    component = render(
      <Blog
        key={blog.id}
        blog={blog}
        blogs={blogs}
        setBlogs={setBlogs}
        setNotificationMsg={setNotificationMsg}
        handleLike={clickLikes}
      />
    )
    // component.debug()
  })

  test('renders content', () => {
    const title = component.getByText('Title of the blog')
    expect(title).toBeDefined()
    const auth = component.getByText('Matti Luukkainen')
    expect(auth).toBeDefined()
    expect(component.container).toHaveTextContent('Title of the blog')
  })

  test('checks that the component displaying a blog renders ', () => {
    let element = screen.getByText('Title of the blog')
    expect(element).toBeDefined()

    element = screen.getByText('Matti Luukkainen')
    expect(element).toBeInTheDocument()
  })

  test('at start the url and likes are not displayed', () => {
    const elements = component.container.querySelector('.details')

    expect(elements).toHaveStyle('display: none')

    let element = elements.querySelector('.likes')
    expect(element).toBeDefined()

    element = elements.querySelector('.url')
    expect(element).toBeDefined()
  })

  test('after dobleclick in like button, 2 times is the controller event', async () => {
    const user = userEvent.setup()
    // component.debug()
    const sendButton = screen.getByText('like')
    expect(sendButton).toBeDefined()
    // await user.click(sendButton)
    await user.dblClick(sendButton)

    expect(clickLikes.mock.calls).toHaveLength(2)
  })

  test('after clicking the button view, children are displayed', async () => {
    const divBefore = component.container.querySelector('.details')
    expect(divBefore).toHaveStyle('display: none')

    const user = userEvent.setup()
    const button = screen.getByText('view')
    act(async () => {
      await user.click(button)
      const divAfter = component.container.querySelector('.details')
      expect(divAfter).not.toHaveStyle('display: none')
    })
  })
})
