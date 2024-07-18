import React from 'react';
import Header from '../components/Home_Header';
import Title from '../components/Home_Title';
import NewsSection from '../components/Home_NewsSection';
import EconomicSection from '../components/Home_EconomicSection';

function Home() {
    return (
        <div>
            <Header />
            <Title />
            <NewsSection />
            <EconomicSection />
        </div>
    );
}

export default Home;
