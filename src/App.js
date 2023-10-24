import './App.css';
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';
import Modal from './components/Modal/Modal';
import MoviePrincipal from './components/MoviePrincipal/MoviePrincipal';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
        
        <MoviePrincipal />

        <Movies />
        
        <Routes>
          <Route path={`/details/:id`} element={<Modal />} />
        </Routes>
    </div>
  );
}

export default App;
