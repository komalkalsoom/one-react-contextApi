import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Auth/Login'
import Home from './pages/Home'
import UserContextProvider from './context/UserContextProvider'
const App = () => {
  return (
    <UserContextProvider>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
   
    </UserContextProvider>
  )
}

export default App