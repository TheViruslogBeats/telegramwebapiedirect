import React from 'react'
import { useLocation } from 'react-router-dom'

const Redirect = () => {
  const location = useLocation()
  let path = location.pathname
  path = path.replace("/", "")
  path = path.replace("/", "")
  let telegramData = location.search
  let newLink = `http://${path}/${telegramData}`
  window.location.href = newLink
  return (
    <div>{location.pathname}</div>
  )
}

export default Redirect