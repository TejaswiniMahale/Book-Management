import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, fetchBooks } from '../Redux/actions';
import BookItem from './BookItem';
import SortBook from './SortBook';
import Pagination from './Pagination';
import Filterbook from './Filterbook';
import "./searchStyle.css"

const SearchBook = () => {

    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.books.searchTerm);

    const handleSearch = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchBooks(searchTerm, 'ASC', 1));
    };

    const books = useSelector((state) => state.books.books);

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='searchBar'>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="Search for books..."
                        />
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
            <div>
                <div className='filterSort'>
                    <SortBook />
                    <Filterbook />
                </div>
                <div className='booklist'>
                    {books.map((book) => (
                        <BookItem key={book.id} book={book} />
                    ))}
                </div>
                <Pagination />
            </div>
        </>
    );
};

export default SearchBook
    ;
