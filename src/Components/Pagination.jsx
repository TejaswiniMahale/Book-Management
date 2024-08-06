import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, fetchBooks } from '../Redux/actions';

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.books.currentPage);
    const totalPages = useSelector((state) => state.books.totalPages);
    const searchTerm = useSelector((state) => state.books.searchTerm);
    const sortDir = useSelector((state) => state.books.sortDir);

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
        dispatch(fetchBooks(searchTerm, sortDir, page));
    };

    const pages = [];
    for (let i = 1; i <= totalPages?totalPages:1; i++) {
        pages.push(
            <button
                key={i}
                onClick={() => handlePageChange(i)}
                disabled={i === currentPage}
            >
                {i}
            </button>
        );
    }

    return <div>{pages}</div>;
};

export default Pagination;
