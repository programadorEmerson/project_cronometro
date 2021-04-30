import React, { Component } from "react";
import "./cronometro.css";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

class Cronometro extends Component {
  render() {
    return cronometro();
  }
}

const cronometro = () => {
  return (
    <section className="cronometro">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

export default Cronometro;
