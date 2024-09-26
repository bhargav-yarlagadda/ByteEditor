import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/homescreen/HomeScreen' 
import PlayGroundSceen from './screens/playgroundscreen/PlayGroundSceen'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/playground' element={<PlayGroundSceen/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App