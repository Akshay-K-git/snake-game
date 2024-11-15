import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {

  return (
  <>
  <Header/>
  <Routes>
    <Route path='/' element={<Landingpage/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
  </>
  );
}

export default App;
