import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './Components/Users'
import Register from './Pages/Register'
import Edit from './Pages/Edit'
import Profil from './Pages/Profil'
import UserContextProvider from './Context/UserContext'
import './styles/register.css'
import './styles/user.css'
import './styles/nav.css'
import './styles/LoginProfil.css'
import Login from './Pages/Login'
import Nav from './Components/Nav'


export default function App() {

  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
        <Nav/>
          <Routes>
          <Route path='/' element={<Users />} />
            <Route path='/users' element={<Users />} />
            <Route path='/Edit' element={<Edit />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profil/:id' element={<Profil />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  )
}
