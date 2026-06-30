import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageSlider from '../../../component/ImageSlider';

const HomeScreen = () => {
    return (
        <SafeAreaView>

            <ScrollView
                style={{
                    //backgroundColor:'blue',
                    paddingVertical: 20,
                    paddingHorizontal: 10
                }}
            >

                {/* Search Section */}
                <View style={{
                    width: '100%',
                    backgroundColor: '#DEDEDE',
                    height: 50,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <Image
                        source={require('../../../assets/images/search.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text
                        style={{
                            // backgroundColor:'green',
                            width: '80%'
                        }}
                    >
                        Search keywords..
                    </Text>
                    <Image
                        source={require('../../../assets/images/filter.png')}
                        style={{ width: 20, height: 20 }}
                    />
                </View>


                {/* Slider Section */}

                <ImageSlider
                images = {[
                 require('../../../assets/images/banner.png'),
                 require('../../../assets/images/banner.png'),
                 require('../../../assets/images/banner.png')]             
                 }
                 
                /> 

            

            </ScrollView>

        </SafeAreaView>
    );
};

export default HomeScreen;