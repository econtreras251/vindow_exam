import React from 'react';

function Empty(props: { message: string }) {
    return (
        <div className="container d-flex justify-content-center align-items-start flex-column">
            <p className="text-dark">{props.message}</p>
            <div className="mt-3">
                <h4 className="font-weight-bold text-dark">Suggestions</h4>
                <ul className="mt-3">
                    <li><p>Make sure that all words are spelled correctly</p></li>
                    <li><p>Try different keywords</p></li>
                    <li><p>Try more general keywords</p></li>
                </ul>
            </div>
        </div>
    );
}

export default Empty;