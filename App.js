import React from "react";
import { Router, Scene } from "react-native-router-flux";
import DadosRepositorio from "./src/Screens/DadosRepositorio";
import ListaRepositorio from "./src/Screens/ListaRepositorio";
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene
            key="dadosrepositorio"
            component={DadosRepositorio}
            title="Dados do Repositorio"
            initial
          />

          <Scene
            key="listarepositorio"
            component={ListaRepositorio}
            title="Listagem de Repositorio"
          />
        </Scene>
      </Router>
    </Provider>
  );
};

export default App;
