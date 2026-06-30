import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';
import Toast from 'react-native-simple-toast';
import useLoginViewModel from './LoginViewModel';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInputText from '../../component/CustomInputText';

import CustomTextField from '../../component/CustomTextField';





const LoginScreen = ({ navigation }) => {


  const { login, loading, error } = useLoginViewModel();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const onLogin = async () => {
    Keyboard.dismiss();


    // navigation.navigate('category',{
    //   name: "page name",
    // });

    if (!email) {
      console.log('asdasda');
      //Alert.alert('email required');
      Toast.show('Please enter email address');
      return;
    } else if (!isValidEmail(email)) {
      //Alert.alert('Please enter a valid email');
      Toast.show('Please enter a validemail address');
      return;
    } else if (!password) {
      Alert.alert('Password required');
      return;
    } else {
      const response = await login(email, password);
      if (response) {
        Alert.alert('Password required');
        //console.log('Login Success', response);
      }
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

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
               style = {{
                fontSize:25,
                fontWeight:'bold',
                paddingVertical:10
               }}
            >
              Welcome back !
            </Text>
            <Text
            style = {{
                fontSize:16,
                fontWeight:'regular',
                paddingBottom:10
               }}>
              Sign in to your account
            </Text>

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
                secureTextEntry={secure}
                value={password}
                onChangeText={setPassword}
                keyboardType="email-address"
                image={require('../../assets/images/padlock.png')}
              />
              <TouchableOpacity
                onPress={() => setSecure(!secure)}
                style={{
                  position: 'absolute',
                  right: 20,
                  height: 50,
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={secure ? require('../../assets/images/eyeHidden.png') : require('../../assets/images/eyeOpen.png')}
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
              onPress = {() => {
                navigation.navigate('forgetPassword');
              }

            }
              >
              <Text
                style={{
                  textDecorationLine: 'underline',
                  paddingBottom:10,
                  color:'blue'
                }}
              >Forget Password</Text>
            </TouchableOpacity>

              <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('bottomTab')
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
                            Login
                          </Text>
                        </View>
                      </TouchableOpacity>

                <TouchableOpacity style = {{
                  flexDirection:'row',
                  paddingVertical:10
                }}  onPress={() => {
                navigation.navigate('signup')
              }}>
                  <Text
                  style = {{
                fontSize:14,
                fontWeight:'regular',
                paddingBottom:10
               }}
                  >Don’t have an account ? </Text>
                  <Text
                  style = {{
                fontSize:14,
                fontWeight:'bold',
                paddingBottom:10
               }}
                  >Sign up</Text>
                </TouchableOpacity>

          </View>

          </View>



        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;


{/*
<KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={80}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-start',
            padding: 20,
          }}
        // style={{ flex: 1 }}
        // //keyboardVerticalOffset={20}
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >


          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Image
              source={{
                uri: 'https://picsum.photos/200/300',
              }}
              style={{
                width: 200,
                height: 200,
                padding: 20,
              }}
            />
          </View>

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
                fontSize: 40,
                fontWeight: 'bold'
              }}
            >
              Login
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
          <View style={{
            paddingVertical: 10,
          }}>
            <Text>
              Password*
            </Text>
          </View>

          <View style={{

          }}>
            <CustomInputText
              placeholder="Password"
              secureTextEntry={secure}
              value={password}
              onChangeText={setPassword}
              keyboardType="email-address"
            />
            <TouchableOpacity
              onPress={() => setSecure(!secure)}
              style={{
                position: 'absolute',
                right: 20,
                height: 50,
                justifyContent: 'center',
              }}
            >
              <Image
                source={secure ? require('../../assets/images/eyeHidden.png') : require('../../assets/images/eyeOpen.png')}
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
              onPress = {() => {
                navigation.navigate('forgetPassword');
              }
            }
              >
              <Text
                style={{
                  textDecorationLine: 'underline',
                }}
              >Forget Password</Text>
            </TouchableOpacity>

          </View>
          {error ? <Text>{error}</Text> : null}

          <View style={{
            height: 50,
          }}>

          </View>

          <TouchableOpacity
            onPress={() => {
             // onLogin();
             navigation.navigate('homeScreen')
            }}
          >
            {loading ? (
              <ActivityIndicator />
            ) : (
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


            )}
          </TouchableOpacity>

          <View style={{
            alignItems: 'center',
            paddingVertical: 20
          }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('signup')
              }}>
              <View
                style={{
                  flexDirection: 'row'
                }}
              ><Text>Don't have an account? </Text>
                <Text style={{
                  fontWeight: 'bold'
                }}>SIGN UP </Text></View>

            </TouchableOpacity>

          </View>

        </KeyboardAwareScrollView>
*/}