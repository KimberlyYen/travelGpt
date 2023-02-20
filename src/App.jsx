import { NavLink, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import './style.css'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Fork IT</NavLink>
      </nav>

      <div className="container">
        <div className="main">
          <NavLink end to="/books">
            <img src="../src/assets/home.png" alt="home_PNG_Idea_to_Travel" />
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
