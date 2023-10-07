import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Merch } from './views/Merch'
import { About } from './views/About'
import { Listen } from './views/Listen'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/merch' element={<Merch />} />
        <Route path='/about' element={<About />} />
        <Route path='/listen' element={<Listen />} />
      </Routes> 
    </>
  )
}

export default App
