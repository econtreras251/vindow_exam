import React, { useCallback } from 'react';
import logo from '../logo.svg';
import NewsPage from './home/News';
import { News } from './home/news.interface';
import Pagination from './home/Pagination';
import SearchBar from './home/SearchBar';

const news: News[] = [{
    title: "Card title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    url: "Go somewhere"
},
{
    title: "Card title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    url: "beca"
},
{
    title: "Card title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    url: "doca"
},
{
    title: "Card title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    url: "catjo"
}];

function Home() {
    return (
        <div className="container mt-3">
            <SearchBar />
            <NewsPage news={news} />
            <Pagination />
        </div>
    );
}

export default Home;
