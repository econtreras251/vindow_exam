import * as React from 'react';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { searchAction } from '../redux/actions';
import { selectLoading } from '../redux/selectors';


interface SearchFormValues {
    searchTerm: string;
}

const initialValues: SearchFormValues = { searchTerm: '' };

function SearchBar() {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectLoading);    

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                dispatch(searchAction(values.searchTerm));
                actions.setSubmitting(false);
            }}
        >
            <Form className="form-row m-0 mb-3 justify-content-between">
                <div className="col-md-11 p-0">
                    <Field id="searchTerm" name="searchTerm" placeholder="Enter to search news" type="text" className="form-control" aria-describedby="search news" required />
                </div>

                <button disabled={loading} className="btn btn-primary text-light" type="submit">Search</button>
            </Form>
        </Formik>
    );
}

export default SearchBar;