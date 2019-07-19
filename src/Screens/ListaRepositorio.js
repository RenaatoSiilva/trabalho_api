import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  ActionSheetIOS
} from "react-native";
import { Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import styled from 'styled-components'

class ListaRepositorio extends Component {
  render() {
    if (this.props.loading) {
      return (
        <StyledViewActivityIndicator style={{ flex: 1 }}>
          <ActivityIndicator animating={true} />
        </StyledViewActivityIndicator>
      );
    } else {
      return (
        <StyledView style={{ flex: 1 }}>
          <StyledTextTitle>Listadem de Repositorios</StyledTextTitle>

          <FlatList
            ref="listRef"
            // data={this.props.clientes}
            // renderItem={this.mostrarClientes}
            keyExtractor={(item, index) => index}
          />
        </StyledView>
      );
    }
  }

  openModal = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };


  mostrarClientes({ item, index }) {
    return (
      <StyledViewRow>

        <StyledTextContent>
         Nome do Repositorio:  
        </StyledTextContent>

        <StyledTextContent>
          Descrição: 
        </StyledTextContent>

        <StyledTextContent>
          000: 
        </StyledTextContent>
        </StyledViewRow>
    )
  }


}

export default ListaRepositorio;


const StyledView = styled.View`
background-color: #fff;
align-items: center;
`

const StyledTextTitle = styled(Text)`
    text-align: center;
    color: #fff;
    font-size: 30;
    margin: 10px;
    font-weight: bold;
`
const StyledTextContent = styled(Text)`
    font-size: 14;
    margin-top: 5px;
    font-weight: bold;
`

const StyledViewRow = styled.View`
background-color: #fff;
align-items: center;
padding: 10px;
margin: 3px
`

const StyledViewActivityIndicator = styled.View`
background-color: #f58300;
align-items: center;
`


