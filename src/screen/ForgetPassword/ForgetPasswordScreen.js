import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomInputText from '../../component/CustomInputText'

const ForgetPasswordScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');


    return (
        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        keyboardShouldPersistTaps="handled"
                        extraScrollHeight={80}
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: 'flex-start',
                            padding: 20,
                        }}
                    >

                        <View
                            style={{
                                height: 50,
                                borderRadius: 25,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 50
                            }}
                        >
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}
                            >
                                Forget Password
                            </Text>
                        </View>

                        <View style={{
                            padding: 10,
                        }}>
                            <Text>
                                Email Address*
                            </Text>
                        </View>



                        <CustomInputText
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                        <View
                        style={{
                            height:50
                        }}
                        >
                            
                        </View>

                        <View
                                        style={{
                                          flex: 1,
                                          height: 50,
                                          borderRadius: 25,
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          backgroundColor: 'black'
                                        }}
                                      >
                                        <Text
                                          style={{
                                            color: 'white',
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                          }}
                                        >
                                          Login
                                        </Text>
                                      </View>


                        



                    </KeyboardAwareScrollView>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}
                        style={{
                            position: 'absolute',
                            left: 20,
                            top: 20,
                            height: 50,
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            source={require('../../assets/images/backArrow.png')}
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    </TouchableOpacity>
                </View>


            </TouchableWithoutFeedback>

        </SafeAreaView>
    )
};

export default ForgetPasswordScreen;