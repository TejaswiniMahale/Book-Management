import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, updateBook, setSelectedBook } from '../Redux/actions';
import "./AddBook.css"
import CloseIcon from '@mui/icons-material/Close';


const AddBook = ({ handleClose }) => {
    const dispatch = useDispatch();
    const selectedBook = useSelector((state) => state.books.selectedBook);

    const [book, setBook] = useState({
        author: '',
        country: '',
        language: '',
        link: '',
        pages: '',
        title: '',
        year: '',
        id: ''
    });

    const [errors, setErrors] = useState({});

    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];

    useEffect(() => {
        if (selectedBook) {
            setBook(selectedBook);
        }
    }, [selectedBook]);

    const validate = () => {
        const newErrors = {};
        if (!book.title) newErrors.title = 'Title is required';
        if (!book.author) newErrors.author = 'Author is required';
        if (!book.country) newErrors.country = 'Country is required';
        if (!book.language) newErrors.language = 'Language is required';
        if (!book.link) newErrors.link = 'Link is required';
        if (!book.pages || isNaN(book.pages) || book.pages <= 0) newErrors.pages = 'Pages must be a positive number';
        if (!book.year || isNaN(book.year) || book.year <= 0) newErrors.year = 'Year must be a positive number';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            if (book.id) {
                dispatch(updateBook(book));
            } else {
                dispatch(addBook(book));
            }
            dispatch(setSelectedBook(null));
            setBook({
                author: '',
                country: '',
                language: '',
                link: '',
                pages: '',
                title: '',
                year: '',
                id: ''
            });
            handleClose();
        }
    };

    const handleCancel = () => {
        dispatch(setSelectedBook(null));
        setBook({
            author: '',
            country: '',
            language: '',
            link: '',
            pages: '',
            title: '',
            year: '',
            id: ''
        });
    };

    return (
        <div>
            <div className='addbook-flex'>
                <h2>{book.id ? 'Edit Book' : 'Add Book'}</h2>
                <h2>
                    <CloseIcon onClick={handleClose} />
                </h2>
            </div>
            {Object.keys(errors).length > 0 && (
                <div style={{ color: 'red', marginBottom: '1rem' }}>
                    {Object.values(errors).map((error, index) => (
                        <div key={index}>{error}</div>
                    ))}
                </div>
            )}
            <form onSubmit={handleSubmit}>

                <div className='addbookFields'>
                    <input
                        type="text"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        placeholder="Title"
                        required

                    />
                    <input
                        type="text"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        placeholder="Author"
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        value={book.country}
                        onChange={handleChange}
                        placeholder="Country"
                        required
                    />
                    <select
                        name="language"
                        value={book.language}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Language</option>
                        {languages.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        name="link"
                        value={book.link}
                        onChange={handleChange}
                        placeholder="Link"
                        required
                    />
                    <input
                        type="number"
                        name="pages"
                        value={book.pages}
                        onChange={handleChange}
                        placeholder="Pages"
                        required
                    />
                    <input
                        type="text"
                        name="year"
                        value={book.year}
                        onChange={handleChange}
                        placeholder="Year"
                        required
                    />
                    <button type="submit" style={{ background: "green" }}>{book.id ? 'Update Book' : 'Add Book'}</button>
                    {book.id && <button type="button" onClick={handleCancel}>Cancel</button>}
                </div>
            </form>
        </div>
    );
};

export default AddBook;
