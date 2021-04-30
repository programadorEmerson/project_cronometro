import React, { Component } from 'react';
import './main.css';
import Keyboard from '../Keyboard';
import Contador from '../Contador';
import Botoes from '../Botoes';

class Main extends Component {
  render() {
    return main();
  }
}

const main = () => {
  return (
    <main>
      <h1>TIMMER TRYBE-X</h1>
      <section className='content'>
        <Contador />
        <Keyboard />
      </section>
      <Botoes />
    </main>
  );
};

export default Main;
