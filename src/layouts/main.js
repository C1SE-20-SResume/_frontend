import React from "react";
import { Header, Footer } from "../components";

function Main({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Main;
