import React from 'react';

function SearchBar() {
    return (
        <form className="needs-validation">
            <div className="form-row m-0 mb-3 justify-content-between">
                <div className="col-md-11 p-0">
                    <input placeholder="Enter to search news" type="text" className="form-control" aria-describedby="search news" required />
                </div>

                <button className="btn btn-primary text-light" type="submit">Search</button>
            </div>
        </form>
    );
}

export default SearchBar;
