import {
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const OtpScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
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
                    style = {{
                        width:'100%',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    >
                        <Text
                        style = {{
                            fontSize:20,
                            fontWeight:'semibold'

                        }}
                        >
                            OTP
                        </Text>
                    </View>

                    </KeyboardAwareScrollView>


                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: 0,
                            height: 50,
                            width:50,
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
}

export default OtpScreen;