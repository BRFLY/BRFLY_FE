import React from "react";
import "../css/App.css";

const NewsItem = ({ title, description }) => {
  return (
    <div className="news-item">
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
