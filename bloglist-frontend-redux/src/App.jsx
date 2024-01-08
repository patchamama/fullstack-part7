import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'

import { createNotification } from './reducers/notificationReducer'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  // const [notification, setNotificationMsg] = useState({
  //   type: null,
  //   msg: null
  // })
  const [formBlogVisible, setformBlogVisible] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const notification = useSelector(({ notification }) => {
    // alert(notification.message)

    return notification
  })

  const notify = (message, type) => {
    const time = 3
    dispatch(createNotification(message, time, type))
  }

  const logout = () => {
    const time = 3
    // setNotificationMsg({
    //   type: 'ok',
    //   msg: `${user.name} is logged out!`
    // })

    notify(`${user.name} is logged out!`, 'ok')
    setTimeout(() => {
      // setNotificationMsg({ type: null, msg: null })
      window.localStorage.removeItem('loggedBlogappUser')
      setUser(null)
    }, time * 1000)
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      // console.log(window.localStorage)
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      notify(`Logged-in with user ${user.name}!`, 'ok')
      // setNotificationMsg({
      //   type: 'ok',
      //   msg: `Logged-in with user ${user.name}!`
      // })
      // setTimeout(() => {
      //   setNotificationMsg({ type: null, msg: null })
      // }, 5000)
    } catch (exception) {
      console.log(exception)
      notify('Wrong credentials', 'error')
      // setNotificationMsg({
      //   type: 'error',
      //   msg: 'Wrong credentials'
      // })
      // setTimeout(() => {
      //   setNotificationMsg({ type: null, msg: null })
      // }, 5000)
    }
  }

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        {/* <Notification message={notification} /> */}
        <Notification message={notification} />
        <LoginForm
          handleSubmit={handleLogin}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          username={username}
          password={password}
        />
      </div>
    )
  }

  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={notification} />
      <p>
        {user.name} logged-in <button onClick={logout}>logout</button>
      </p>

      <Togglable buttonLabel="new blog">
        <BlogForm
          blogs={blogs}
          setBlogs={setBlogs}
          // setNotificationMsg={setNotificationMsg}
        />
      </Togglable>
      {sortedBlogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          blogs={blogs}
          setBlogs={setBlogs}
          // setNotificationMsg={setNotificationMsg}
        />
      ))}
    </div>
  )
}

export default App
