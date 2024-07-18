import React, { useState } from 'react';
import NewsItem from './News_NewsItem';
import '../css/App.css';

const Employment = () => {
  const news = Array.from({ length: 20 }, (_, index) => ({
    title: `경제 뉴스 ${index + 1}`,
    description: '짧은 설명 텍스트',
  }));

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedNews = news.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="section">
      <div className="section-header">
        <h2>EMPLOYMENT</h2>
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={index === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(index)}
            >
              {index === currentPage ? '—' : '•'}
            </span>
          ))}
        </div>
      </div>
      <div className="bubble-container">
        <div className="navigation-buttons">
          <button onClick={() => handlePageChange((currentPage - 1 + totalPages) % totalPages)}>이전</button>
          <button onClick={() => handlePageChange((currentPage + 1) % totalPages)}>다음</button>
        </div>
        {displayedNews.map((item, index) => (
          <NewsItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Employment;
