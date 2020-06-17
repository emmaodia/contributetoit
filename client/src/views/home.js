import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../component/Header';
import Body from '../component/Body';
import Footer from '../component/Footer';

function Home() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default Home;
