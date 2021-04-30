import { connect } from "react-redux";
import "./contador.css";

function Contador({ retorno }) {
  const { hour, minuts, second } = retorno;

  const ajustarCasas = (valor) => {
    if (valor >= 0 && valor < 10) return `0${valor}`;
    return valor;
  };

  return (
    <p className="contador">
      {ajustarCasas(hour)}:{ajustarCasas(minuts)}:{ajustarCasas(second)}
    </p>
  );
}

// Recebe o valor via props
const mapStateToProps = (state) => ({
  retorno: state.counterReducer.counter,
});

// Faz a conexão Redux
export default connect(mapStateToProps)(Contador);
