import React, { useCallback, useMemo } from 'react';
import { selectSearchCount, selectSearchLimit, selectSearchPage, selectSearchTerm } from '../redux/selectors';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../redux/store';
import useWindowSize from '../react-hooks/useWindowSize';
import { searchAction } from '../redux/actions';

function Pagination() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectSearchCount);
  const currentPage = useAppSelector(selectSearchPage);
  const searchTerm = useAppSelector(selectSearchTerm);
  const itemsPerPage = useAppSelector(selectSearchLimit);
  const numberOfPages = useMemo(() => Math.round(count / itemsPerPage), [count, itemsPerPage]);

  const [width] = useWindowSize();
  const isMobile = useMemo(() => width <= 576, [width]);

  const handlePageClick = useCallback((event: any) => {
    const page = event.selected + 1;
    dispatch(searchAction({ searchTerm, page }));
  }, [searchTerm, dispatch]);

  return (
    <nav aria-label="Page navigation example">
      <ReactPaginate
        className="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        breakLabel="..."
        previousLabel="&laquo;"
        nextLabel="&raquo;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={isMobile ? 1 : 2}
        pageCount={numberOfPages}
        forcePage={currentPage - 1}
      />
    </nav>
  );
}

export default Pagination;
