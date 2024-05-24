import React from 'react';
import '../styles/ArticlesPage.css'; // Ensure the CSS file path is correct

function ArticlesPage() {
  const articles = [
    { title: 'Understanding Chronic Pain', summary: 'Explore the science behind chronic pain and its treatments.' },
    { title: 'Benefits of Regular Exercise', summary: 'Discover how regular exercise can improve your overall health.' },
    { title: 'Healthy Eating on a Budget', summary: 'Learn tips for eating well without breaking the bank.' },
    // Add more articles as needed
  ];

  return (
    <div className="articles">
      <h1>Health Articles</h1>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesPage;
