// /**
//  * @format
//  */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry, View, ImageBackground } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/Header';
import Login from './src/components/Login';
import UsersList from './src/components/UsersList';

// Create a component
const App = () => { 
    const { viewStyle } = styles;
    const backgroundImageURI = './src/img/background-screen.jpg';

    return (
        // ## Login Page ##
        //{ <ImageBackground source={ require(backgroundImageURI) } style={ viewStyle }>
        //    <Header slogenText={'Gift the right Gifts'}/>
        //    <Login />
        //</ImageBackground>

        // ## Find Partner Screen ##
        <ImageBackground source={ require(backgroundImageURI) } style={ viewStyle }>
            <Header slogenText={'Gift the right Gifts'}/>
            <UsersList />
        </ImageBackground>
    );
};

const styles = {
    viewStyle: {
        flex: 1,
        backgroundColor: '#fbf93a',
    }
}

// Render it to the device
AppRegistry.registerComponent(appName, () => App);