import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CompaniesListContainer from './pages/CompaniesListContainer'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<CompaniesListContainer />} />
        <Route path='/foods' element={<CompaniesListContainer />} />
      </Routes>
    </>
  );
}

export default App;
