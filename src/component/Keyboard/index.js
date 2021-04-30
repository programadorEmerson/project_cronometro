import { connect } from "react-redux";
import "./teclado.css";
import { changeCounter } from "../../store/actions/counter.action";

function Keyboard({ changeCounter, retorno }) {
  const { hour, minuts, second } = retorno;

  const ajustarCasas = (valor) => {
    if (valor >= 0 && valor < 10) return `0${valor}`;
    return valor;
  };

  const changeTimmer = (number) => {
    const timmer = [
      ajustarCasas(hour),
      ajustarCasas(minuts),
      ajustarCasas(second),
    ];

    const segundos = `${timmer[2]}`.split("");
    const minutos = `${timmer[1]}`.split("");
    const horas = `${timmer[0]}`.split("");

    horas[0] = horas[1];
    horas[1] = minutos[0];

    minutos[0] = minutos[1];
    minutos[1] = segundos[0];

    segundos[0] = segundos[1];
    segundos[1] = number;

    return {
      hour: parseInt(horas[0] + horas[1]),
      minuts: parseInt(minutos[0] + minutos[1]),
      second: parseInt(segundos[0] + segundos[1]),
    };
  };

  const clickAdd = (numero) => {
    const { hour, minuts, second } = changeTimmer(numero);

    changeCounter({
      hour: hour,
      minuts: minuts,
      second: second,
    });
  };

  const clickRemovLast = (numero) => {
    const { hour, minuts, second } = clearLast();

    changeCounter({
      hour: hour,
      minuts: minuts,
      second: second,
    });
  };

  const clearLast = () => {
    const timmer = [
      ajustarCasas(hour),
      ajustarCasas(minuts),
      ajustarCasas(second),
    ];

    const segundos = `${timmer[2]}`.split("");
    const minutos = `${timmer[1]}`.split("");
    const horas = `${timmer[0]}`.split("");

    segundos[1] = segundos[0];
    segundos[0] = minutos[1];

    minutos[1] = minutos[0];
    minutos[0] = horas[1];

    horas[1] = horas[0];
    horas[0] = "0";

    return {
      hour: parseInt(horas[0] + horas[1]),
      minuts: parseInt(minutos[0] + minutos[1]),
      second: parseInt(segundos[0] + segundos[1]),
    };
  };

  return (
    <section className="teclado">
      <button onClick={() => clickAdd(1)} className="number">
        1
      </button>
      <button onClick={() => clickAdd(2)} className="number">
        2
      </button>
      <button onClick={() => clickAdd(3)} className="number">
        3
      </button>
      <button onClick={() => clickAdd(4)} className="number">
        4
      </button>
      <button onClick={() => clickAdd(5)} className="number">
        5
      </button>
      <button onClick={() => clickAdd(6)} className="number">
        6
      </button>
      <button onClick={() => clickAdd(7)} className="number">
        7
      </button>
      <button onClick={() => clickAdd(8)} className="number">
        8
      </button>
      <button onClick={() => clickAdd(9)} className="number">
        9
      </button>
      <button onClick={() => clickRemovLast()} className="number">
        {<i className="fas fa-backspace"></i>}
      </button>
      <button onClick={() => clickAdd(0)} className="number">
        0
      </button>
    </section>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
