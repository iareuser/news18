import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import Home2 from './component/Home2';
import AddArticle from './component/AddArticle';
import ViewArticle from './component/ViewArticle';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/view-article" element={<ViewArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
