
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='contact'  element={<Contact/>} />
          <Route path="projects"  element={<Projects/>} />
          <Route path="tech-stack"  element={<TechStack/>} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
