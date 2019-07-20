import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import styled from "styled-components";
import Data from "../JSON/listaRepositorio.json";
import Icon from 'react-native-vector-icons/Ionicons'
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
      <StyledView style={{
        flex: 1, paddingTop:
          Platform.OS === 'android'
            ? StatusBar.currentHeight : 20
      }}>
        <StyledTextTitle>Buscar Repositórios</StyledTextTitle>
        <StyledTextContent>Pesquisar</StyledTextContent>
        <View style={{ flexDirection: 'row' }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 5,
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 4
          }}>
            <TextInput style={{ paddingHorizontal: 5 }} placeholder='usuário/repositório' />
          </View>
        </View>

        <FlatList
          ref="listRef"
          data={this.state.lstRepositories}
          renderItem={this.renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </StyledView>
    );
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => Actions.dadosrepositorio({ item })}>
        <StyledViewRow style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{
            flex: 0.2,
            justifyContent: 'center',
            alignContent: 'center'
          }}>
            <StyledImage source={{ uri: item.owner.avatar_url }} />
          </View>
          <View style={{ flex: 0.8 }}>
            <View style={{ marginVertical: 16, flex: 0.25, flexDirection: 'row' }}>
              <StyledTextContent style={{ flex: 1 }}>{item.name}</StyledTextContent>
              <StyledTextContent>{item.stargazers_count}</StyledTextContent>
              <Icon style={{ marginRight: 6 }} name='md-star' size={12} />
            </View>
            <View style={{ flex: 0.75 }}>
              <StyledTextContent numberOfLines={2}>{item.description}</StyledTextContent>
            </View>
          </View>
        </StyledViewRow>
      </TouchableOpacity>
    );
  }
}

export default ListaRepositorio;

const StyledView = styled.View`
  background-color: #fff;
  padding-horizontal: 23px;
`;

const StyledTextTitle = styled(Text)`
  color: #000;
  font-size: 30;
  font-weight: bold;
`;

const StyledImage = styled(Image)`
  width: 55px;
  height: 55px;
  margin-left: 6px;
  border-radius: 26px;
`;

const StyledTextContent = styled(Text)`
  font-family: Roboto;
  font-size: 16;
  color: #000;
`;

const StyledViewRow = styled.View`
  background-color: #f2f2f2;
  border-radius: 4px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
  height: 100px;
  width: 312px;
  margin-vertical: 5px;
`;