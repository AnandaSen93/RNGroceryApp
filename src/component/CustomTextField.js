
import React from 'react'
import {
    View,
    TextInput,
    Image
} from 'react-native';

const CustomTextField = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default',
    image,
}) => {
    return (
        <View style={{
            borderWidth: 1,
            borderColor:'grey',
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
            backgroundColor:'#FFFFFF'
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: '50'
            }}>
                    <Image
                        source={image}
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain',
                            tintColor:'grey'
                        }}
                    />


                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: 12,
                        fontSize: 18,
                        color: '#333',
                    }}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                />
            </View>

            <View style={{}} />
        </View>
    );
};



export default CustomTextField;
