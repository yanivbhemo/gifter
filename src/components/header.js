// Import libs for making a component
import React from 'react';
import { Image } from 'react-native';

// Make a component
const Header = () => {
    const logoURI = "../img/logo.png";
    return (
        <Image source={require(logoURI)} />
    );
};

// Make the component available to other parts of the app
export default Header;