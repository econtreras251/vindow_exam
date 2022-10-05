import React, { useMemo } from 'react';
import { selectSearchError } from '../redux/selectors';
import { useAppSelector } from '../redux/store';
import Empty from './Empty';

function Error() {
    const errorMessage = useAppSelector(selectSearchError);
    const message = useMemo(() => errorMessage || "Something went wrong, sorry about that.", [errorMessage]);

    return <Empty message={message} />;
}

export default Error;