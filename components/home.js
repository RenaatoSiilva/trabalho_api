import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    ActivityIndicator, TouchableHighlight
} from 'react-native';

import { getReposUser } from '../services/git'

class Home extends Component {
    state = {
        lstRepositories: []
    }

    componentDidMount() {
        getReposUser("mayander30").then(resp => {
            console.log(JSON.stringify(resp))
            this.setState({lstRepositories: resp.data});
        })
    }

    render() {

        return (
            <View style={styles.container}>
                
                <FlatList
                    ref='listRef'
                    data={this.state.lstRepositories}
                    renderItem={this.renderItem}
                    keyExtractor={ (item, index) => index.toString()}/>
            </View>
        );
        
    }

    renderItem({item, index}) {
        return (
            <TouchableHighlight onPress={() => this.showOptions(item)} underlayColor='rgba(0,0,0,.2)'>
                <View style={styles.row}>                   

                    <Text style={styles.text}>
                        {item.name}
                    </Text>
                    <Text style={styles.description}>
                        {item.full_name}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
};

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#F5F5F5'
    },

    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    description: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 8 * 2
    },

    text: {
        marginTop: 5,
        fontSize: 14,
    },

    addButton: {
        backgroundColor: '#ff5722',
        borderColor: '#ff5722',
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});

export default Home