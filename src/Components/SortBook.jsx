import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortDir, fetchBooks } from '../Redux/actions';
import "./searchStyle.css"

const SortBook = () => {
    const dispatch = useDispatch();
    const sortDir = useSelector((state) => state.books.sortDir);
    const searchTerm = useSelector((state) => state.books.searchTerm);

    const handleSortChange = (e) => {
        dispatch(setSortDir(e.target.value));
        dispatch(fetchBooks(searchTerm, e.target.value, 1));
    };

    return (
        <div>
            <label>
                Sort by:
                <select className='sort' value={sortDir} onChange={handleSortChange}>
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                </select>
            </label>
        </div>
    );
};

export default SortBook;
