import React, { Component } from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';

const UserItem = ({user}) => {
    const { firstName, lastName, image, email } = user;
    const { 
        userImageStyle, 
        userItemStyle, 
        userImageContainerStyle, 
        userItemTextStyle,
        addBtnContainerStyle,
        addBtnImageStyle
     } = styles;
    const defaultPic = 'https://www.abc.net.au/news/image/8314104-1x1-940x940.jpg';
    const addPic = '../img/addBtn.png';

    return (
        <Card>
            <CardSection>
                <View style={ userImageContainerStyle }>
                    <Image
                        style={ userImageStyle } 
                        source={ { uri: image ? image : defaultPic } } 
                    />
                </View>
                <View style={ userItemStyle }>
                    <Text style={userItemTextStyle}>{firstName} {lastName}</Text>
                    <Text>{email}</Text>
                </View>
                <View style={ addBtnContainerStyle }>
                    <Image 
                        style={addBtnImageStyle}
                        source={ require(addPic) } 
                    />
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
                <Card>
                    <CardSection>
                        <View style={ styles.searchContainer }>
                            <TextInput
                                style={styles.searchInput}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                            <Button 
                                title="Search"
                            />
                        </View>
                    </CardSection>
                </Card>
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
    searchContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    searchInput: {
        width: 260
    },
    userItemStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: 230
    },
    userItemTextStyle: {
        fontSize: 18
    },
    userImageStyle: {
        height: 50,
        width: 50
    },
    userImageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    addBtnContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtnImageStyle: {
        height: 25,
        width: 25
    }
};
export default UsersList;