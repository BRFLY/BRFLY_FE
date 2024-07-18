import React from 'react';

const NewsItem = ({ title, description }) => {
    return (
        <div style={{ width: '200px', margin: '10px', textAlign: 'left' }}>
            <div style={{ width: '100%', height: '150px', backgroundColor: '#ccc' }}></div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default NewsItem;
