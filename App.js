import React from "react";
import { Router, Scene } from "react-native-router-flux";
import ListaRepositorio from "./src/Screens/ListaRepositorio";
import DadosRepositorio from "./src/Screens/DadosRepositorio"
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Router>
      <Scene key="root">

        <Scene
          key="listarepositorio"
          component={ListaRepositorio}
          hideNavBar={true}
          title="BUSCAR REPOSITÓRIOS"
        />

        <Scene
          key="dadosrepositorio"
          component={DadosRepositorio}
          title="USUÁRIO"
        />
      </Scene>

    </Router>
  );
};

export default App;
