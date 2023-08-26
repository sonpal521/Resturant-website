

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path='/' element = {<Home/>} />
       <Route path='/about' element = {<About/>} />
       <Route path='/contact' element = {<Contact/>} />
       <Route path='*' element = {<Error/>} />


      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
