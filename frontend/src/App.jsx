import React from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import DetailPage from './pages/DetailPage/DetailPage'
import Auth from './pages/Auth/Auth'
import AddPost from './pages/AddPost/AddPost'
const App = () => {
  return (
    <div className='app'>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/detailpage' element={<DetailPage/>}></Route>
      <Route path='/addpost' element={<AddPost/>}></Route>
      <Route path="/auth" element={<Auth/>} />
     </Routes>
    </div>
  )
}

export default App
