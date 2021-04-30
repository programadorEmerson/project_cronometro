import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return header();
  }
}

const header = () => {
  return (
    <header>
      <label className="contentHeader">TRYBE 2021 - TRIBO B - TURMA 10</label>
    </header>
  );
};

export default Header;
