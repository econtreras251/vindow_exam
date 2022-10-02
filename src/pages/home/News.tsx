import React, { useCallback } from 'react';
import Card from '../../components/Card';
import { News } from './news.interface';

function NewsPage(props: { news: News[] }) {

    const renderNews = useCallback(() => {
        return props.news.map(n => (<div key={n.url} className="col mb-4">
            <Card imgUrl={n.image} />
        </div>));
    }, [props.news])

    return (
        <div className="row row-cols-1 row-cols-md-3">
            {renderNews()}
        </div>
    );
}

export default NewsPage;