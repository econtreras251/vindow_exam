import React, { useMemo } from 'react';
import { selectSearchCount, selectSearchPage, selectSearchLimit } from '../redux/selectors';
import { useAppSelector } from '../redux/store';


function Pagination() {
  const count = useAppSelector(selectSearchCount);
  const page = useAppSelector(selectSearchPage);
  const limit = useAppSelector(selectSearchLimit);
  const numOfPages = useMemo(() => Math.round(count / limit), [count, limit]);
  
  const pages = useMemo(() => {
    // TODO: calculate the numbers that need to show in order to match with the page.
    if (numOfPages >= 6) {
      return Array.from(Array(6).keys()).concat(numOfPages);
    }
    return Array.from(Array(numOfPages).keys())
  }, [numOfPages]);

  const renderPagesLinks = useMemo(
    () => pages.map((pagNum) => (<li className="page-item" key={pagNum}><a className="page-link" href="#">{pagNum + 1}</a></li>)),
    [pages]
  );

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {renderPagesLinks}

        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
