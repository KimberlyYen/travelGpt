import { NavLink, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { BookRoutes } from './BookRoutes'
import './style.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Fork IT</NavLink>
          </li>
          <li>
            <NavLink end to="/books">
              {' '}
              Books{' '}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
