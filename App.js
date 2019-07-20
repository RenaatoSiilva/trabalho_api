import React from "react";
import { Router, Scene } from "react-native-router-flux";
import ListaRepositorio from "./src/Screens/ListaRepositorio";
import { Provider } from 'react-redux';

const App = () => {
  return (
      <Router>
        <Scene key="root">
          
          <Scene
            key="listarepositorio"
            component={ListaRepositorio}
            title="Listagem de Repositorio"
          />
        </Scene>
      </Router>
  );
};

export default App;
