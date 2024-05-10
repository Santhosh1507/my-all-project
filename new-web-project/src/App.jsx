import React from 'react'
import './App.css'
// import Navbar from './component/Fullpage/Navbar'
import Selectoption from './component/Selectoption/Selectoption'
import Signup from './component/Form Page/Signup'
// import Login from './component/Form Page/Login'
import Profile from './component/Profile page/Profile'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/mainpage'element={<Selectoption />} />
      </Routes>
    </div>
  )
}

export default App
