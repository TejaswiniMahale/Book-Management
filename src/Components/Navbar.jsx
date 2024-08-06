import React, { useState } from 'react'
import AddBook from './AddBook'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "./AddBook.css"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='navbar'>
      <div className="logo">
        <div className="logo-icon">Book</div>
        <div className="logo-text">Management</div>
      </div>
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
          Add New Book
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          maxWidth="lg"
        >
          <DialogContent>
            <AddBook handleClose={handleClose} />
          </DialogContent>
        </Dialog>
      </div>
    </div>

  )
}

export default Navbar