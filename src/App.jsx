import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Book } from './pages/Book'

function App() {


  return (
    <div className="App">
    <nav>  
      <ul>
        <li>
          <Link to="/"> Home </Link>
            </li>
          <li>
            <Link to="/books"> Book </Link>
          </li>
      </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Book />} />
      </Routes>
    </div>
  )
}

export default App
