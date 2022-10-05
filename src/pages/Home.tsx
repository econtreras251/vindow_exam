import React, { useEffect } from 'react';
import { searchAction } from '../redux/actions';
import { selectNews, selectSearchCount } from '../redux/selectors';
import { useAppDispatch, useAppSelector } from '../redux/store';
import NewsPage from '../components/News';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Modal from '../components/Modal';

function Home() {
    const dispatch = useAppDispatch();
    const news = useAppSelector(selectNews);
    const count = useAppSelector(selectSearchCount);


    useEffect(() => {
        dispatch(searchAction({ searchTerm: "soccer", page: 1 }));
    }, [dispatch]);

    return (
        <div className="container mt-3">
            <Modal />
            <h1 className="display-4 text-warning font-weight-bold">News Search</h1>
            <SearchBar />
            <NewsPage news={news} />
            {count > 0 ? <Pagination />: null}
        </div>
    );
}

export default Home;
