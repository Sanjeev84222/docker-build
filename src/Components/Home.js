import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";

const Home = () => {
  return (
    <div className="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
