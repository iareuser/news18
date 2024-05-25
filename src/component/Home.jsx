import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div>
      <h1>Welcome to News Article App</h1>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;
