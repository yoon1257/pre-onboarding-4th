import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/pages/Main';
import Footer from './components/footer/Footer';
import List from './pages/List';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/list' element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
