import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'



function App() {
  
  return (
    <>
   
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
   
    </BrowserRouter>
  
    </>
  )
}

export default App
