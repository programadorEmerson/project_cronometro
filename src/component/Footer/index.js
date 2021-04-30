import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return footer();
  }
}

const footer = () => {
  return (
    <footer>
      <label className="contentFooter">
        SEUS PROBLEMAS ACABARAM, O TIMMER MAIS PRECISO DE TODOS
      </label>
    </footer>
  );
};

export default Footer;
