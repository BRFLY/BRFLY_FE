import React from 'react';
import NewsItem from '../components/Home_NewsItem';

const EconomicSection = () => {
    const news = [
        { title: '물염형 워케이션', description: '설명 텍스트 1' },
        { title: '로컬 체류형 워케이션', description: '설명 텍스트 2' },
        { title: '리프레시형 워케이션', description: '설명 텍스트 3' },
        { title: '네트워킹형 워케이션', description: '설명 텍스트 4' },
    ];

    return (
        <div>
            <h2>경제 모음</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {news.map((item, index) => (
                    <NewsItem key={index} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    );
};

export default EconomicSection;
