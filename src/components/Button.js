import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const Button = (props) => {
    //const URI = "'" + props.imageURI + "'";
    const URI = '../img/addBtn.png';
    const { 
        BtnImageStyle,
        buttonStyle,
        textStyle 
    } = styles;
    
    if(props.type==='imageBtn') {
        return (
            <TouchableOpacity>
                <Image 
                    style={BtnImageStyle}
                    source={ require(URI) }
                />
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={() => console.log("Pressed")} style={buttonStyle}>
                <Text style={textStyle}>
                    Click Me
                </Text>
            </TouchableOpacity>
        );
    }
};
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
    },
    buttonStyle: {
        alignSelft: 'stretch',
    },
    BtnImageStyle: {
        height: 25,
        width: 25
    }
}
export default Button;