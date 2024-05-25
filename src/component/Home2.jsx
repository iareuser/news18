import React from 'react';
import { Link } from 'react-router-dom';
import './Home2.css'

function Home2() {
  return (
    <div>
      <h1>Home2</h1>
      <Link to="/add-article">
        <button>Add Article</button>
      </Link>
      <Link to="/view-article">
        <button>View Articles</button>
      </Link>
    </div>
  );
}

export default Home2;
