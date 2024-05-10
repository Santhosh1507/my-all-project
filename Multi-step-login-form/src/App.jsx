import React from 'react'
import Register from './component/Form page/Register'
import { Routes, Route} from 'react-router-dom'
import Login from './component/Form page/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
