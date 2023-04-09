import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import './index.css'
import Home from './pages/Home/Home.jsx'
import Form from './pages/Form/Form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='form' element={<Form />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
