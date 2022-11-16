import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Book } from './pages/Book'
import { BookList } from './pages/BookList'

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
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </div>
  )
}

export default App
