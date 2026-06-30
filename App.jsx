// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { useNavigation } from '@react-navigation/native';
// import { StatusBar, StyleSheet, useColorScheme, View, Text, Image, ScrollView, Pressable,} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';




// function App() {
//   // const isDarkMode = useColorScheme() === 'dark';
//   const value = 10;
//   const email = 'test@yopmail.com';
//   const fruits = ['Apple', 'Banana', 'Orange', 'Apple', 'Banana', 'Orange', 'Apple', 'Banana', 'Orange'];


//   const navigation = useNavigation()


//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ color: 'blue' }}>New </Text>
//         <View style={{ flexDirection: 'column', width: '70%', backgroundColor: "#fff", padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
//           <Text style={{ color: 'blue' }}>{value} </Text>
//           <Text style={{ color: 'green' }}>{email}</Text>

//           {/* <ScrollView style = {{width: '100%'}}>
//           {fruits.map((item, index) => (
//             <View>

//               <Text key={index}>{item}</Text>
//               <Image
//                 source={{ uri: 'https://picsum.photos/id/1/200/300' }}
//                 style={{
//                   width: '100%',
//                   height: 250,
//                 }}
//                 resizeMode="cover"
//               />
//             </View>
//           ))}
//           </ScrollView> */}

//           <Pressable onPress={()=>
//              console.log("first")
//             // navigation.navigate()
//           }><Text>Press</Text></Pressable>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }



// export default App;
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/login_page/LoginScreen';
import SignUpScreen from './src/screen/SignUp/SignUpScreen';
import CategoryScreen from './src/screen/category_page/category';
import ForgetPasswordScreen from './src/screen/ForgetPassword/ForgetPasswordScreen';
import OtpScreen from './src/screen/OTP/OtpScreen'
import IntroScreen from './src/screen/intro_page/intro'
import BottomTab from './src/screen/BottomNavigation/BotomTab/BotomScreen';
import { enableScreens } from 'react-native-screens';


enableScreens();

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="introScreen"  screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signup" component={SignUpScreen} />
          <Stack.Screen name="category" component={CategoryScreen} />
          <Stack.Screen name="forgetPassword" component={ForgetPasswordScreen} />
          <Stack.Screen name="otpScreen" component={OtpScreen} />
          <Stack.Screen name="introScreen" component={IntroScreen} />
          <Stack.Screen name="bottomTab" component={BottomTab}/>

        </Stack.Navigator>


        


      </NavigationContainer>
    );
  }
}
