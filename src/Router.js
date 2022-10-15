import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/pages/Main';

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;