import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Login from './Login';
import Profile from './Profile'
import Header from './Header';
import Editform from './Editform';


const Routings = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/Editform/:id' element={<Editform/>}></Route>
        <Route path='*' element={<Navigate to="/home"></Navigate>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routings