import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Solution from './pages/Solution'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
