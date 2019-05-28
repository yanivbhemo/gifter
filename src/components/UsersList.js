import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import axios from 'axios';

class UsersList extends Component{

    constructor(props) {
        super(props);
        this.state = { text: 'Enter Full Name' };
    }

    componentWillMount() {
        axios.get('https://my-json-server.typicode.com/yanivbhemo/gifter/users')
            .then(response => console.log(response));
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.label}>1/3   Find Your Partner</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    textAlign={'center'}
                />
                <Button title="Search" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red',
        height: 150
    },
    label: {
        fontSize: 30,
        paddingBottom: 15
    },
    textInput: {
        height: 40,
        width: 200,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
});

export default UsersList;