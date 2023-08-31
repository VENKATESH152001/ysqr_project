import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Empregister } from './components/signup/signup';
import { Table } from './components/table/table';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Empregister/>]}></Route>
      <Route path='/table' element={[<Table/>]}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
