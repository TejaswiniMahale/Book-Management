import {
    FETCH_BOOKS_SUCCESS,
    ADD_BOOK_SUCCESS,
    UPDATE_BOOK_SUCCESS,
    SET_SELECTED_BOOK,
    SET_SEARCH_TERM,
    SET_SORT_DIR,
    SET_CURRENT_PAGE,
    SET_LANGUAGE_FILTER,
} from './actions';

const initialState = {
    books: [],
    selectedBook: null,
    searchTerm: '',
    sortDir: 'ASC',
    currentPage: 1,
    totalPages: 1,
    languageFilter: '',
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload.data,
                totalPages: action.payload.pagination.totalPages,
            };
        case ADD_BOOK_SUCCESS:
        case UPDATE_BOOK_SUCCESS:
            return state;
        case SET_SELECTED_BOOK:
            return {
                ...state,
                selectedBook: action.payload,
            };
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        case SET_SORT_DIR:
            return {
                ...state,
                sortDir: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_LANGUAGE_FILTER:
            return {
                ...state,
                languageFilter: action.payload,
            };
        default:
            return state;
    }
};

export default bookReducer;
