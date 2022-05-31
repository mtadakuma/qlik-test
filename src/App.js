import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Branches from './components/Branches'
import Foods from './components/Foods'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Branches />} />
        <Route path='/foods' element={<Foods />} />
      </Routes>
    </>
  );
}

export default App;
