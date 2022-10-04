import React, { useEffect } from 'react';
import { searchAction } from '../redux/actions';
import { selectNews } from '../redux/selectors';
import { useAppDispatch, useAppSelector } from '../redux/store';
import NewsPage from './home/News';
import Pagination from './home/Pagination';
import SearchBar from './home/SearchBar';

function Home() {
    const dispatch = useAppDispatch();
    const news = useAppSelector(selectNews);

    useEffect(() => {
        dispatch(searchAction(""));
    }, [dispatch]);

    return (
        <div className="container mt-3">
            <h1 className="display-4 text-warning font-weight-bold">News Search</h1>
            <SearchBar />
            <NewsPage news={news} />
            <Pagination />
        </div>
    );
}

export default Home;
