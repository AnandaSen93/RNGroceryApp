

import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  loading
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');

const sliderData = [
  { id: '1', title: 'Get Discounts On All Products', subTitle: "1Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy", imagePath: require('../../assets/images/getStarted1.png') },
  { id: '2', title: 'Buy Premium Quality Fruits', subTitle: "2Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy", imagePath: require('../../assets/images/getStarted2.png') },
  { id: '3', title: 'Set Buy Quality Dairy Productsings', subTitle: "3Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy", imagePath: require('../../assets/images/getStarted3.png') },
  { id: '4', title: 'Premium Food At Your Doorstep', subTitle: "4Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy", imagePath: require('../../assets/images/getStarted4.png') },

];

const IntroScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(
        viewableItems[0].index
      );
    }
  };

  const viewConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const renderItem = ({ item }) => {
    return (

      <View style={styles.slide}>

        <Image
          source={item.imagePath}
          style={{
            position: 'absolute',
            flex: 1
          }}
        />

        <View style={{
          width: width,
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 20,
        }}>
          <Text numberOfLines={2}
            style={styles.title}
          >
            {item.title}
          </Text>
          <Text numberOfLines={3}
            style={styles.subTitle}
          >
            {item.subTitle}
          </Text>
        </View>




      </View>

    );
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <View style={styles.container}>
        <FlatList
          data={sliderData}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          onViewableItemsChanged={
            onViewableItemsChanged
          }
          viewabilityConfig={viewConfig}
        />

        <View style={styles.topContainer}>
          <View style={styles.indicatorContainer}>
            {sliderData.map((item, index) => (
              <View
                key={item.id}
                style={[
                  styles.dot,
                  currentIndex === index &&
                  styles.activeDot,
                ]}
              />
            ))}
          </View>
          <View style={{
            height: 20
          }}
          ></View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login');
              
            }}
            style={{
              alignSelf: 'center',
              width: '90%',
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;



// Style Sheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },

  slide: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    width: '70%',
    textAlign: 'center',
   // fontWeight: 'bold',
    fontFamily: 'CormorantGaramond-Regular'
  },
  subTitle: {
    padding: 10,
    fontSize: 14,
    width: '70%',
    textAlign: 'center',
    fontWeight: '300',
  },

  indicatorContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  topContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 40,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: '#6CC51D',
    width: 20,
  },
});