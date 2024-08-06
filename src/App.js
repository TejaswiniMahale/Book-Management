import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from './Redux/actions';
import SearchBook from './Components/SearchBook';
import Navbar from './Components/Navbar';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchBooks('', 'ASC', 1));
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar/>
      <SearchBook/>
    </div>
  );
}

export default App;
