 
import './App.css';
import { Route,Routes } from 'react-router-dom';
import {Home} from "./Pages/Home";
import {BookList} from "./Pages/BookList";
import { Link } from 'react-router-dom';
import {Book} from './Pages/Book'
import {NewBook} from './Pages/NewBook'
import {NotFound} from './Pages/NotFound'
function App() {
  return (
    <> 
    <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Books">Books</Link></li>
      </ul>
    </nav>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Books" element={ <BookList/>}/>
    <Route path="/Books/:id" element={ <Book/>}/>
    <Route path="/Books/new" element={ <NewBook/>}/>
    <Route path="*" element={ <NotFound/>}/>
   </Routes>
   </>
  );
}

export default App;
