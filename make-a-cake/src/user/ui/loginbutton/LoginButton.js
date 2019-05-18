import React from 'react'

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <li className="nav-item">
      <a href="#" className="nav-link" onClick={(event) => onLoginUserClick(event)}>Sign Up/Login</a>
    </li>
  )
}

export default LoginButton
