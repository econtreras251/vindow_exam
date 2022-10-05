import React, { useMemo } from 'react';
import { selectSearchTerm } from '../redux/selectors';
import { useAppSelector } from '../redux/store';
import Empty from './Empty';

function NoResults() {
    const searchTerm = useAppSelector(selectSearchTerm);
    const message = useMemo(() => `Sorry, there are no results for ${searchTerm}`, [searchTerm]);

    return <Empty message={message} />;
}

export default NoResults;