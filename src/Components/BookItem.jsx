import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedBook } from '../Redux/actions';
import "./searchStyle.css"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "./AddBook.css"
import AddBook from './AddBook';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const handleEditBook = () => {
    dispatch(setSelectedBook(book));
  };

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    handleEditBook()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div className='bookItem'>
      <div className='bookImg'>
        <img src='https://images.unsplash.com/photo-1530538987395-032d1800fdd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="book-image" />
      </div>
      <div className='singleItem'>
        <h3>Title : {book.title}</h3>
        <p>Author : {book.author}</p>
        <p>Language : {book.language}</p>
        <p>Link : {book.link}</p>
        <p>Total Pages : {book.pages}</p>
        <p>Country : {book.country}</p>
        <p>Year : {book.year}</p>
        <div>
          <Button variant="outlined"
            onClick={handleClickOpen}
            sx={{
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
              borderColor: 'black',
              '&:hover': {
                backgroundColor: '#ffffff2e',
                color: 'white',
                borderColor: 'black',
              },
            }} >
            Edit Book
          </Button>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogContent>
              <AddBook handleClose={handleClose} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
