import { connect } from "react-redux";
import React, { useState } from "react";
import { changeCounter } from "../../store/actions/counter.action";
import "./botoes.css";

function Botoes({ changeCounter, retorno }) {
  const { hour, minuts, second } = retorno;

  const ajustarCasas = (valor) => {
    if (valor >= 0 && valor < 10) return `0${valor}`;
    return valor;
  };

  const iniciar = function () {
    const totalLooping = hour * 60 * 60 + minuts * 60 + second;

    for (var i = 1; i <= totalLooping; i += 1) {
      (function (ind) {
        setTimeout(function () {
          let descont = second - (second - ind);
          let totalNumberOfSeconds =
            hour * 60 * 60 + minuts * 60 + second - descont;
          let hours = ajustarCasas(parseInt(totalNumberOfSeconds / 3600));
          let minutes = ajustarCasas(
            parseInt((totalNumberOfSeconds - hours * 3600) / 60)
          );
          let seconds = ajustarCasas(
            Math.floor(totalNumberOfSeconds - (hours * 3600 + minutes * 60))
          );
          changeCounter({
            hour: parseInt(hours),
            minuts: parseInt(minutes),
            second: parseInt(seconds),
          });
        }, 1000 + 1000 * ind);
      })(i);
    }
  };

  const contador = () => {
    return (
      <section className="controlers">
        <button onClick={iniciar} className="botao">
          <i className="fas fa-play fasBotao"></i>INICIAR
        </button>
      </section>
    );
  };

  return contador();
}

// Recebe o valor via props
const mapStateToProps = (state) => ({
  retorno: state.counterReducer.counter,
});

// envia o valor para a Action
const mapDispatchToProps = (dispatch) => ({
  changeCounter: (value) => dispatch(changeCounter(value)),
});

// Faz a conexão Redux
export default connect(mapStateToProps, mapDispatchToProps)(Botoes);
