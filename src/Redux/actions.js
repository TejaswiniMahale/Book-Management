import axios from 'axios';

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';
export const SET_SELECTED_BOOK = 'SET_SELECTED_BOOK';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SORT_DIR = 'SET_SORT_DIR';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_LANGUAGE_FILTER = 'SET_LANGUAGE_FILTER';

export const fetchBooks = (title = '', sortDir = 'ASC', page = 1, language = '') => async (dispatch) => {
    try {
        const response = await axios.get(`/application-test-v1.1/books`, {
            params: { title, DIR: sortDir, page, language },
        });
        dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data });
    } catch (error) {
        console.error(error);
    }
};

export const addBook = (book) => async (dispatch) => {
    try {
        const response = await axios.post(`/application-test-v1.1/books`, book);
        dispatch({ type: ADD_BOOK_SUCCESS, payload: response.data });
        dispatch(fetchBooks());
    } catch (error) {
        console.error(error);
    }
};

export const updateBook = (book) => async (dispatch) => {
    try {
        const response = await axios.put(`/application-test-v1.1/books/${book.id}`, book);
        dispatch({ type: UPDATE_BOOK_SUCCESS, payload: response.data });
        dispatch(fetchBooks());
    } catch (error) {
        console.error(error);
    }
};

export const setSelectedBook = (book) => ({
    type: SET_SELECTED_BOOK,
    payload: book,
});

export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term,
});

export const setSortDir = (dir) => ({
    type: SET_SORT_DIR,
    payload: dir,
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
});

export const setLanguageFilter = (language) => ({
    type: SET_LANGUAGE_FILTER,
    payload: language,
});
