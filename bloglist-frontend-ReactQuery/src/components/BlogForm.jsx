import { useState } from 'react'
import blogService from '../services/blogs'

const BlogForm = ({ blogs, setBlogs, setNotificationMsg, addBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const newAddBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    }

    blogService
      .create(blogObject)
      .then((returnedBlog) => {
        // to fix the bug of not showing the user's name when creating a new blog
        // otherwise, the user's name will be shown as 'undefined'
        // other choice is to reload the page or to read the blogs again from the server
        if ('loggedBlogappUser' in window.localStorage) {
          const loggedUserJSON =
            window.localStorage.getItem('loggedBlogappUser')
          if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            returnedBlog.user = {
              username: user.username,
              name: user.name,
              id: user.id,
            }
          }
        }
        // to fix the bug of not showing the user's name when creating a new blog
        // const getUpdatedBlog = await blogService.get(blog.id)
        // if ('user' in getUpdatedBlog) {
        //   updatedBlog.user = getUpdatedBlog.user
        // }

        setBlogs(blogs.concat(returnedBlog))

        setNotificationMsg({ type: 'ok', msg: `Added ${newTitle}!` })
        setTimeout(() => {
          setNotificationMsg({ type: null, msg: null })
        }, 5000)
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
      })
      .catch((error) => {
        setNotificationMsg({
          type: 'error',
          msg: error.stack,
        })
        setTimeout(() => {
          setNotificationMsg({ type: null, msg: null })
        }, 5000)
        console.log(error)
      })
  }

  addBlog = addBlog || newAddBlog

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        title:
        <input
          id='title'
          name='title'
          data-testid='title-input'
          value={newTitle}
          onChange={({ target }) => setNewTitle(target.value)}
        />
        <br />
        author:
        <input
          id='author'
          name='author'
          data-testid='author-input'
          value={newAuthor}
          onChange={({ target }) => setNewAuthor(target.value)}
        />
        <br />
        url:
        <input
          id='url'
          name='url'
          data-testid='url-input'
          value={newUrl}
          onChange={({ target }) => setNewUrl(target.value)}
        />
        <br />
        <button id='create' type='submit'>
          create
        </button>
      </form>
    </div>
  )
}

export default BlogForm
