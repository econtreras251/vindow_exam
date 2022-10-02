import React from 'react';
import NewsPage from './home/News';
import { News } from './home/news.interface';
import Pagination from './home/Pagination';
import SearchBar from './home/SearchBar';

const news: News[] = [{
    title: "Beautiful Italy. Let's Traveling!",
    description: "Some quick example text to build on the card title and make up the bulk of",
    image: "https://images.unsplash.com/photo-1446482972539-0ed52b3e9520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "Go somewhere"
},
{
    title: "Let's have an Adventure outside Canada",
    description: "Some quick example text to build on the card title and make up the bulk of",
    image: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "beca"
},
{
    title: "Let's have an Adventure at Japan",
    description: "Some quick example text to build on the card title and make up the bulk of",
    image: "https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    url: "doca"
},
{
    title: "Let's have an Adventure at the ground",
    description: "Some quick example text to build on the card title and make up the bulk of",
    image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "catjo"
},{
    title: "Let's have an Adventure at the woods",
    description: "Some quick example text to build on the card title and make up the bulk of",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "ripmo"
},{
    title: "Let's have an Adventure at the beach",
    description: "Some quick example text to build on the card title and make up the bulk of",
    image: "https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    url: "deljo"
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
