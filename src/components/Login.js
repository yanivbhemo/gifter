import React from 'react';
import { Image, View } from 'react-native';

const Login = () => {
    const { imageStyle, viewStyle } = styles;
    const fb_btnURI = "../img/fb_btn.png";

    return (
        <View style={ viewStyle }>
            <Image source={ require(fb_btnURI) } style={imageStyle} />
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 230,
        height: 30,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10},
        shadowOpacity: 0.2,
    },
    imageStyle: {
        width: 280,
        height: 50,
    }
};

export default Login;