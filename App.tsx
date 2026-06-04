/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View, Text, Image, ScrollView, Pressable,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




function App() {
  // const isDarkMode = useColorScheme() === 'dark';
  const value = 10;
  const email = 'test@yopmail.com';
  const fruits = ['Apple', 'Banana', 'Orange', 'Apple', 'Banana', 'Orange', 'Apple', 'Banana', 'Orange'];


  const navigation = useNavigation()


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'blue' }}>New </Text>
        <View style={{ flexDirection: 'column', width: '70%', backgroundColor: "#fff", padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
          <Text style={{ color: 'blue' }}>{value} </Text>
          <Text style={{ color: 'green' }}>{email}</Text>

          {/* <ScrollView style = {{width: '100%'}}>
          {fruits.map((item, index) => (
            <View>

              <Text key={index}>{item}</Text>
              <Image
                source={{ uri: 'https://picsum.photos/id/1/200/300' }}
                style={{
                  width: '100%',
                  height: 250,
                }}
                resizeMode="cover"
              />
            </View>
          ))}
          </ScrollView> */}

          <Pressable onPress={()=>
             console.log("first")
            // navigation.navigate()
          }><Text>Press</Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}



export default App;
