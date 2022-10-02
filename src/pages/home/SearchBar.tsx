import React from 'react';

function SearchBar() {
    return (
        <form className="needs-validation">
            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="validationServer03">City</label>
                    {/* control the class is-invalid with formik */}
                    <input placeholder="Enter to search news" type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                    <div id="validationServer03Feedback" className="invalid-feedback">
                        Please provide a term to search.
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
