const Notification = ({ message }) => {
  console.log(message)
  const classval = message.type === 'error' ? 'error' : 'ok'
  if (message.type === null) {
    return null
  }

  return <div className={classval}>{message.message}</div>
}

export default Notification
