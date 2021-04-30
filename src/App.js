import Cronometro from "./component/Cronometro";
import { Provider } from "react-redux";
import { store } from "./store/store/store";

function App() {
  return (
    <Provider store={store}>
      <section className="App">
        <Cronometro />
      </section>
    </Provider>
  );
}

export default App;
