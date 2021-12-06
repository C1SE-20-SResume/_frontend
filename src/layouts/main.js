import React from "react";
import { Header, Footer } from "../components";

function Main({ children, setUserInfo }) {
  return (
    <>
      <Header setUserInfo={setUserInfo} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Main;
