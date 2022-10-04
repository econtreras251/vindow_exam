import React, { useCallback } from 'react';
import Card from '../../components/Card';
import { News } from './news.interface';

function NewsPage(props: { news: News[] }) {

    const renderNews = useCallback(() => {
        return props.news.map(n => (<div key={n.url} className="col mb-4">
            <Card title={n.title} description={n.description} imgUrl={n.image} url={n.url} />
        </div>));
    }, [props.news])

    return (
        <div className="row row-cols-1 row-md-3">
            {renderNews()}
        </div>
    );
}

export default NewsPage;