import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Header from '../component/Header';
import Body from "../component/Body";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <div class="container mx-auto px-24">
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Body />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
