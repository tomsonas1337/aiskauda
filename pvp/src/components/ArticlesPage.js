import React, { useState } from 'react';
import '../styles/ArticlesPage.css'; // Ensure the CSS file path is correct
import { useTranslation } from 'react-i18next';

// Importing images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

function ArticlesPage() {
  const { t } = useTranslation();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      title: t('article_1_title'),
      summary: t('article_1_summary'),
      image: image1,
      content: t('article_1_content')
    },
    {
      title: t('article_2_title'),
      summary: t('article_2_summary'),
      image: image2,
      content: t('article_2_content')
    },
    {
      title: t('article_3_title'),
      summary: t('article_3_summary'),
      image: image3,
      content: t('article_3_content')
    }
  ];

  const handleCloseModal = (e) => {
    if (e.target.classList.contains('modal')) {
      setSelectedArticle(null);
    }
  };

  return (
    <div className="articles">
      <h1>{t('articles_title')}</h1>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card" onClick={() => setSelectedArticle(article)}>
            <img src={article.image} alt={article.title} className="article-image" />
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
      {selectedArticle && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedArticle(null)}>&times;</span>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="modal-image" />
            <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} className="modal-article-content" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticlesPage;
