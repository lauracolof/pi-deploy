import React from "react";
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import CardDetail from './components/CardDetail/CardDetail'
import './app.css';
import DogCreate from './components/CreateDog/CreateDog';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/dog' element={<DogCreate />} />
        <Route exact path='/home' element={<Home />} />
        <Route path='/home/:id' element={<CardDetail />} />
        <Route path='/dogs' element={<DogCreate />} />
      </Routes>
    </>
  )
};

export default App;