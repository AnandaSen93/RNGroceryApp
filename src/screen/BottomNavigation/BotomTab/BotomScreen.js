import {
    View,
    Text,
    Image
} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../HomeScreen/HomeScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import FavoriteScreen from '../FavoriteScreen/FavoriteScreen';
import CartScreen from '../CartScreen/CartScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

// check commit
// changes for home

const BotomScreen = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                //tabBarShowLabel: false,

                // Active tab icon and text color
                tabBarActiveTintColor: '#6CC51D',

                // Inactive tab icon and text color
                tabBarInactiveTintColor: '#999999',

                // Footer background
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    height: 80,
                    paddingBottom: 8,
                    paddingTop: 5,
                    borderTopWidth: 1,
                    borderTopColor: '#EEEEEE',
                },

                // Text styling
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: '600',
                },
            }}
            initialRouteName="Home"



        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        // <View
                        //     style={{
                        //         backgroundColor: focused ? '#000000' : 'transparent',
                        //         borderRadius: 20,
                        //         paddingHorizontal: 15,
                        //         paddingVertical: 8,
                        //         alignItems: 'center',
                        //         justifyContent: 'center',
                        //     }}
                        // >
                        //</View>
                            <Image
                                source={focused ? require('../../../assets/images/home.png') : require('../../../assets/images/home.png')}
                                style={{
                                    width: 24,
                                    height: 24,
                                    resizeMode: 'contain',
                                    marginBottom: 10,
                                    tintColor: focused ? '#6CC51D' : '#999999'
                                }}
                            />

                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../../assets/images/user.png') : require('../../../assets/images/user.png')}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                                marginBottom: 10,
                                tintColor: focused ? '#6CC51D' : '#999999'
                            }}
                        />
                    ),
                }}
            />


            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../../assets/images/favorite.png') : require('../../../assets/images/favorite.png')}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                                marginBottom: 10,
                                tintColor: focused ? '#6CC51D' : '#999999'
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../../assets/images/cart.png') : require('../../../assets/images/cart.png')}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                                marginBottom: 10,
                                tintColor: focused ? '#6CC51D' : '#999999'
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>

    );
};

export default BotomScreen;