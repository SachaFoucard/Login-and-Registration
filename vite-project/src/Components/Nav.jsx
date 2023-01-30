import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
   <nav>
    <ul>
        <li><Link to="/users">User</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
    </ul>
   </nav>
  )
}
