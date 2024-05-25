import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ViewArticle.css';

function ViewArticle() {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
      setArticles(storedArticles);
    }, []);
  
    const handleDelete = (index) => {
      const updatedArticles = [...articles];
      updatedArticles.splice(index, 1);
      setArticles(updatedArticles);
      localStorage.setItem('articles', JSON.stringify(updatedArticles));
    };
  
    return (
      <div className="container">
        <header>
          <h2>View Articles</h2>
          <Link to="/home2">
            <button className="home2-button">Home2</button>
          </Link>
        </header>
        <div className="article-container">
          {articles.length === 0 ? (
            <p>No articles available.</p>
          ) : (
            articles.map((article, index) => (
              <div key={index} className="article">
                <div className="article-content">
                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    {article.driveLink && (
                      <p>
                        <a href={article.driveLink} target="_blank" rel="noopener noreferrer">
                          View Drive Link
                        </a>
                      </p>
                    )}
                  </div>
                  <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
  
  export default ViewArticle;
