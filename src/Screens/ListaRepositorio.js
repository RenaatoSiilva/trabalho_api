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
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import styled from "styled-components";
import Data from "../JSON/listaRepositorio.json";
import { getReposUser } from "../../services/git";

class ListaRepositorio extends Component {
  state = {
    lstRepositories: []
  };

  componentDidMount() {
    getReposUser("RenaatoSiilva").then(resp => {
      console.log(JSON.stringify(resp));
      this.setState({ lstRepositories: resp.data });
    });
  }

  render() {
    return (
      <StyledView style={{ flex: 1 }}>
        <StyledTextTitle>Listagem de Repositorios</StyledTextTitle>
        <FlatList
          ref="listRef"
          data={this.state.lstRepositories}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </StyledView>
    );
  }

  renderItem({ item, index }) {
    return (
        <TouchableOpacity onPress={() => Actions.dadosrepositorio({item})}>
      <StyledViewRow>
        <StyledTextContent>
          <StyledImage
            source={{ uri: item.owner.avatar_url }}
          />
        </StyledTextContent>

        <StyledTextContent>{item.name}</StyledTextContent>

        <StyledTextContent>{item.description}</StyledTextContent>

        <StyledTextContent>{item.stargazers_count}</StyledTextContent>
      </StyledViewRow>
      </TouchableOpacity>
    );
  }
}

export default ListaRepositorio;

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
