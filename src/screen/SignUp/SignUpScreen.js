import React, { memo } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    Image
} from 'react-native';

import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomInputText from '../../component/CustomInputText'
import CustomTextField from '../../component/CustomTextField';

const SignUpScreen = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [securePassword, setSecurePassword] = useState(true);
    const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image
                source={require('../../assets/images/backGround.png')}
                style={{
                    position: 'absolute',
                    flex: 1
                }}
            />

            {/* Top Layer */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    position: 'absolute',
                    top: 50,
                    left: 20,
                    zIndex: 999,
                    elevation: 999,
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    source={require('../../assets/images/backArrow.png')}
                    style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'contain',
                        tintColor: '#FFFFFF', // White
                    }}
                />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled"
                    extraScrollHeight={80}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                    }}
                // style={{ flex: 1 }}
                // //keyboardVerticalOffset={20}
                // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >



                    <View
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: 8,
                            padding: 20
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: 'bold',
                                paddingVertical: 10
                            }}
                        >
                            Create account !
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 'regular',
                                paddingBottom: 10
                            }}>
                            Quickly create account
                        </Text>


                         <CustomTextField
                            placeholder="Name"
                            value={firstName}
                            onChangeText={setFirstName}
                            keyboardType="email-address"
                            image={require('../../assets/images/user.png')}
                        />
                         <CustomTextField
                            placeholder="phone"
                            value={phone}
                            onChangeText={(text) => {
                                const numericValue = text.replace(/[^0-9]/g, '');
                                setPhone(numericValue);
                            }}
                            keyboardType="phone-pad"
                            image={require('../../assets/images/mobile.png')}
                        />

                        <CustomTextField
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            image={require('../../assets/images/email.png')}
                        />



                        <View style={{

                        }}>
                            <CustomTextField
                                placeholder="Password"
                                secureTextEntry={securePassword}
                                value={password}
                                onChangeText={setPassword}
                                keyboardType="email-address"
                                image={require('../../assets/images/padlock.png')}
                            />
                            <TouchableOpacity
                                onPress={() => securePassword(!securePassword)}
                                style={{
                                    position: 'absolute',
                                    right: 20,
                                    height: 50,
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    source={securePassword ? require('../../assets/images/eyeHidden.png') : require('../../assets/images/eyeOpen.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>


                        <View style={{

                        }}>
                            <CustomTextField
                                placeholder="Password"
                                secureTextEntry={secureConfirmPassword}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                keyboardType="email-address"
                                image={require('../../assets/images/padlock.png')}
                            />
                            <TouchableOpacity
                                onPress={() => secureConfirmPassword(!secureConfirmPassword)}
                                style={{
                                    position: 'absolute',
                                    right: 20,
                                    height: 50,
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    source={secureConfirmPassword ? require('../../assets/images/eyeHidden.png') : require('../../assets/images/eyeOpen.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>




                        <View style={{
                            alignItems: 'flex-end'
                        }}>

                            <TouchableOpacity
                                onPress={() => {
                                }}
                                style={{
                                    alignSelf: 'center',
                                    width: '100%',
                                }}
                            > <View
                                style={{
                                    height: 50,
                                    borderRadius: 8,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#6CC51D'
                                }}
                            >
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Sign Up
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                paddingVertical: 10
                            }} onPress={() => navigation.goBack()}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 'regular',
                                        paddingBottom: 10
                                    }}
                                >Already have an account ? </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        paddingBottom: 10
                                    }}
                                >Sign In</Text>
                            </TouchableOpacity>

                        </View>

                    </View>



                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>

        </SafeAreaView>

    )
};

export default SignUpScreen;





//   <View>
//                     <KeyboardAwareScrollView
//                         enableOnAndroid={true}
//                         keyboardShouldPersistTaps="handled"
//                         extraScrollHeight={80}
//                         contentContainerStyle={{
//                             flexGrow: 1,
//                             justifyContent: 'flex-start',
//                             padding: 20,
//                         }}
//                     >


//                         {/* Form Start */}

//                         <View
//                             style={{
//                                 height: 50,
//                                 borderRadius: 25,
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                                 marginBottom: 50
//                             }}
//                         >
//                             <Text
//                                 style={{
//                                     color: 'black',
//                                     fontSize: 25,
//                                     fontWeight: 'bold'
//                                 }}
//                             >
//                                 Sign Up
//                             </Text>
//                         </View>

//                         <View style={{
//                             padding: 10,
//                         }}>

//                             <Text>
//                                 First Name*
//                             </Text>
//                         </View>
//                         <CustomInputText
//                             placeholder="First name*"
//                             value={firstName}
//                             onChangeText={setFirstName}
//                             keyboardType="email-address"
//                         />


//                         <View style={{
//                             padding: 10,
//                         }}>

//                             <Text>
//                                 Last Name*
//                             </Text>
//                         </View>

//                         <CustomInputText
//                             placeholder="Last name*"
//                             value={lastName}
//                             onChangeText={setLastName}
//                             keyboardType="email-address"
//                         />








//                         <View style={{
//                             padding: 10,
//                         }}>

//                             <Text>
//                                 Email Address*
//                             </Text>
//                         </View>





//                         <CustomInputText
//                             placeholder="Email"
//                             value={email}
//                             onChangeText={setEmail}
//                             keyboardType="email-address"
//                         />


//                         <View style={{
//                             padding: 10,
//                         }}>

//                             <Text>
//                                 Phone Number*
//                             </Text>
//                         </View>


//                         <CustomInputText
//                             placeholder="Phone numbere*"
//                             value={phone}
//                             onChangeText={(text) => {
//                                 const numericValue = text.replace(/[^0-9]/g, '');
//                                 setPhone(numericValue);
//                             }}
//                             keyboardType="phone-pad"

//                         />



//                         <View style={{
//                             paddingVertical: 10,
//                         }}>
//                             <Text>
//                                 Password*
//                             </Text>
//                         </View>

//                         <View style={{

//                         }}>
//                             <CustomInputText
//                                 placeholder="Password"
//                                 secureTextEntry={securePassword}
//                                 value={password}
//                                 onChangeText={setPassword}
//                                 keyboardType="email-address"
//                             />
//                             <TouchableOpacity
//                                 onPress={() => setSecurePassword(!securePassword)}
//                                 style={{
//                                     position: 'absolute',
//                                     right: 20,
//                                     height: 50,
//                                     justifyContent: 'center',
//                                 }}
//                             >
//                                 <Image
//                                     source={securePassword ? require('../../assets/images/eyeHidden.png') : require('../../assets/images/eyeOpen.png')}
//                                     style={{
//                                         width: 20,
//                                         height: 20,
//                                     }}
//                                 />
//                             </TouchableOpacity>
//                         </View>


//                         <View style={{
//                             paddingVertical: 10,
//                         }}>
//                             <Text>
//                                 Password*
//                             </Text>
//                         </View>

//                         <View style={{

//                         }}>
//                             <CustomInputText
//                                 placeholder="Confirm Password"
//                                 secureTextEntry={secureConfirmPassword}
//                                 value={confirmPassword}
//                                 onChangeText={setConfirmPassword}
//                                 keyboardType="email-address"
//                             />
//                             <TouchableOpacity
//                                 onPress={() => setSecureConfirmPassword(!secureConfirmPassword)}
//                                 style={{
//                                     position: 'absolute',
//                                     right: 20,
//                                     height: 50,
//                                     justifyContent: 'center',
//                                 }}
//                             >
//                                 <Image
//                                     source={secureConfirmPassword ? require('../../assets/images/eyeHidden.png') : require('../../assets/images/eyeOpen.png')}
//                                     style={{
//                                         width: 20,
//                                         height: 20,
//                                     }}
//                                 />
//                             </TouchableOpacity>
//                         </View>

//                         <View style={{
//                             height: 50,
//                         }}>

//                         </View>

//                         <TouchableOpacity
//                             onPress={() => {

//                             }}
//                         >
//                             {/* {loading ? (
//                                 <ActivityIndicator />
//                             ) :  */}
//                             //(
//                             <View
//                                 style={{
//                                     flex: 1,
//                                     height: 50,
//                                     borderRadius: 25,
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                     backgroundColor: 'black'
//                                 }}
//                             >
//                                 <Text
//                                     style={{
//                                         color: 'white',
//                                         fontSize: 20,
//                                         fontWeight: 'bold'
//                                     }}
//                                 >
//                                     Sign Up
//                                 </Text>
//                             </View>


//                             )
//                             {/* } */}
//                         </TouchableOpacity>

//                         <View style={{
//                             alignItems: 'center',
//                             paddingVertical: 20
//                         }}>
//                             <TouchableOpacity
//                                 onPress={() => {
//                                     navigation.navigate('signup')
//                                 }}>
//                                 <View
//                                     style={{
//                                         flexDirection: 'row'
//                                     }}
//                                 ><Text>Have an account? </Text>
//                                     <Text style={{
//                                         fontWeight: 'bold'
//                                     }}>Log In </Text></View>

//                             </TouchableOpacity>
//                         </View>

//                         {/* From End */}

//                     </KeyboardAwareScrollView>
//                     <TouchableOpacity
//                         onPress={() => {
//                             navigation.goBack();
//                         }}
//                         style={{
//                             position: 'absolute',
//                             left: 20,
//                             top: 20,
//                             height: 50,
//                             justifyContent: 'center',
//                         }}
//                     >
//                         <Image
//                             source={require('../../assets/images/backArrow.png')}
//                             style={{
//                                 width: 20,
//                                 height: 20,
//                             }}
//                         />
//                     </TouchableOpacity>
//                 </View>