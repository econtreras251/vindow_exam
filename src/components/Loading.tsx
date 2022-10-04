import React from 'react';
import './loading.scss';

function Loading() {
    return (
        <div className="text-primary d-flex justify-content-center loading-container">
            <div className="spinner-border loading" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;