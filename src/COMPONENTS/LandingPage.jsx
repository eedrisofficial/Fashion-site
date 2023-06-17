import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Product from "./Product";
import Showcase from "./Showcase";

const LandingPage = ({ search, setSearch }) => {
  return (
    <React.Fragment>
      <Navbar search={search} setSearch={setSearch} />
      <Header />
      <Showcase />
      <Product search={search} />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
