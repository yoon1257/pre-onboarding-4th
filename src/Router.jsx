import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Reservation from './pages/reservation/Reservation';
import Inquiry from './pages/inquiry/Inquiry';
import Information from './pages/information/information';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='information' element={<Information />} />
        <Route path='/inquiry:id' element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
