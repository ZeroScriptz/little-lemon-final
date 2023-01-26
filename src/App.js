import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '@fontsource/karla/400.css'
import '@fontsource/markazi-text/500.css'
import '@fontsource/markazi-text/700.css'

import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme'

import Home from './page/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Booking from './page/Booking';
import BookingConfirmation from './page/BookingConfirmation';
import Login from './page/Login'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='/booking/confirmation' element={<BookingConfirmation />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
