import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddArticle.css';

function AddArticle() {
    const [article, setArticle] = useState({ title: '', description: '', driveLink: '' });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setArticle({ ...article, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const articles = JSON.parse(localStorage.getItem('articles')) || [];
      articles.push(article);
      localStorage.setItem('articles', JSON.stringify(articles));
      navigate('/view-article');
    };
  
    return (
      <div className="container">
        <h2>Add Article</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={article.title} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="description" 
            placeholder="Description" 
            value={article.description} 
            onChange={handleChange} 
            required 
          ></textarea>
          <input 
            type="url" 
            name="driveLink" 
            placeholder="Google Drive Link (optional)" 
            value={article.driveLink} 
            onChange={handleChange} 
          />
          <button type="submit">Add Article</button>
        </form>
      </div>
    );
  }
  
  export default AddArticle;