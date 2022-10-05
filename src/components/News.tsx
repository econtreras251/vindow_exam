import React, { useCallback, useMemo } from 'react';
import Card from './Card';
import Loading from './Loading';
import { selectLoading, selectSearchCount, selectSearchError, selectSearchTerm } from '../redux/selectors';
import { useAppSelector } from '../redux/store';
import { News } from '../models/News';
import Error from './Error';
import NoResults from './NoResults';

interface NewsPageProps {
    news: News[];
}

function NewsPage(props: NewsPageProps) {
    const loading = useAppSelector(selectLoading);
    const count = useAppSelector(selectSearchCount);
    const searchTerm = useAppSelector(selectSearchTerm);
    const errorMessage = useAppSelector(selectSearchError);

    const blankPage = useMemo(() => errorMessage != "" && errorMessage != undefined ? <Error /> : <NoResults />, [errorMessage]);

    const renderNews = useCallback(() => {
        return props.news.map(n => (<div key={n.url} className="col mb-4">
            <Card title={n.title} description={n.description} image={n.image} thumbnail={n.thumbnail} url={n.url} />
        </div>));
    }, [props.news])

    return (
        <div className="row row-cols-1 row-md-3">
            {loading ? <Loading /> : renderNews()}

            {count == 0 && searchTerm != "" && !loading
                ? blankPage
                : null}
        </div>
    );
}

export default NewsPage;