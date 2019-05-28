import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';

const UserItem = ({user}) => {
    const { firstName, lastName, image, email } = user;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        style={ styles.userImageStyle } 
                        source={ { uri: image ? image : 'https://www.abc.net.au/news/image/8314104-1x1-940x940.jpg' } } 
                    />
                </View>
                <View style={styles.userItemStyle}>
                    <Text>{firstName} {lastName}</Text>
                    <Text>{email}</Text>
                </View>
            </CardSection>
        </Card> 
    );
};

class UsersList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            text: 'Enter Full Name' 
        };
    }

    componentWillMount() {
        axios.get('https://my-json-server.typicode.com/yanivbhemo/gifter/users')
            .then(response => this.setState({ users: response.data }));
    }

    renderUsers() {
        return this.state.users.map(user => <UserItem key={user.id} user={user}/>);
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderUsers()}
            </View>
        );
    }
}
{/* <View style={styles.viewStyle}>
                <Text style={styles.label}>1/3   Find Your Partner</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    textAlign={'center'}
                />
                <View>
                    {this.renderUsers()}
                </View>
            </View> */}

const styles = {
    userItemStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    userImageStyle: {
        height: 50,
        width: 50
    }
};
export default UsersList;