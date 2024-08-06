import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguageFilter, fetchBooks } from '../Redux/actions';
import "./searchStyle.css"

const Filterbook = () => {
    const dispatch = useDispatch();
    const languageFilter = useSelector((state) => state.books.languageFilter);
    const searchTerm = useSelector((state) => state.books.searchTerm);
    const sortDir = useSelector((state) => state.books.sortDir);

    const languages = ['English', 'Hindi', 'Marathi', 'Urdu', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        dispatch(setLanguageFilter(selectedLanguage));
        dispatch(fetchBooks(searchTerm, sortDir, 1, selectedLanguage));
    };

    return (
        <div>
            <label>
                Filter by Language:
                <select value={languageFilter} onChange={handleLanguageChange} className='sort'>
                    <option value="">All</option>
                    {languages.map((lang) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default Filterbook;
