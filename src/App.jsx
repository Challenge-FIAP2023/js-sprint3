import { } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import LixeiraInteligente from './components/LixeiraInteligente'
import AppST from './components/AppST'
import ColetaSeletiva from './components/ColetaSeletiva'
import Feedbacks from './components/Feedbacks'
import Sobre from './components/Sobre'
import Contato from './components/Contato'

function App() {

  return (
    <>
  
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/components/LixeiraInteligente' element={<LixeiraInteligente />}/>
          <Route path='/components/AppST' element={<AppST />}/>
          <Route path='/components/ColetaSeletiva' element={<ColetaSeletiva />}/>
          <Route path='/components/Feedbacks' element={<Feedbacks />}/>
          <Route path='/components/Sobre' element={<Sobre />}/>
          <Route path='/components/Contato' element={<Contato />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
