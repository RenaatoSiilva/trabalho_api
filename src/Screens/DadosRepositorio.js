import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  ActionSheetIOS,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import { Actions } from "react-native-router-flux";
import styled from "styled-components";
import Data from "../JSON/listaRepositorio.json";
import { getRepoFromUser } from "../../services/git";

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#fff" }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#fff" }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#fff" }]} />
);

class DadosRepositorio extends Component {
  state = {
    dadosRepositories: [],
    index: 0,
    routes: [
      { key: "first", title: "ISSUES" },
      { key: "second", title: "PULL REQUESTS" },
      { key: "third", title: "COMMITS" }
    ]
  };

  render() {
    return (
      <React.Fragment>

        <StyledTextTitle>
            {this.props.item.name}
        </StyledTextTitle>

        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get("window").width }}
        />
      </React.Fragment>
    );
  }

  componentDidMount() {
    getRepoFromUser("RenaatoSiilva").then(resp => {
      console.log(JSON.stringify(resp));
      
      this.setState({ dadosRepositories: resp.data });
    });
  }
}

export default DadosRepositorio;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const StyledView = styled.View`
  background-color: #fff;
  align-items: center;
`;

const StyledTextTitle = styled(Text)`
  color: #fff;
  font-size: 30;
  margin: 10px;
  font-weight: bold;
`;

const StyledImage = styled(Image)`
  width: 50px;
  height: 100px;
  margin: 2px;
  border-radius: 7px;
`;

const StyledTextContent = styled(Text)`
  text-align: justify;

  font-size: 14;
  margin-top: 5px;
  font-weight: bold;
  color: #000;
`;

const StyledViewRow = styled.View`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 6px 16px;
  border: 1px solid #000;
  height: 200px;
  width: 300px;
  margin: 5px;
`;

const StyledViewActivityIndicator = styled.View`
  background-color: #f58300;
  align-items: center;
`;
