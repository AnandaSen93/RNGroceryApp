import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

const ImageSlider = ({
  images = [],
  interval = 3000,
  repeat = true,
  height = 220,
}) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      let nextIndex = currentIndex + 1;

      if (nextIndex >= images.length) {
        if (repeat) {
          nextIndex = 0;
        } else {
          return;
        }
      }

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setCurrentIndex(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images, interval, repeat]);

  const renderItem = ({ item }) => (
    <Image
      source={
        typeof item === 'string'
          ? { uri: item }
          : item
      }
      style={[
        styles.image,
        {
          width,
          height,
        },
      ]}
    />
  );

  return (
    <View style = {{
        marginVertical:10,
        borderRadius:10
        
    }}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) =>
          index.toString()
        }
        renderItem={renderItem}
        onMomentumScrollEnd={event => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x /
              width
          );
          setCurrentIndex(index);
        }}
      />

      <View
      style={{
         position: 'absolute',
         //zIndex: 999,
         bottom:10,
         left:50

      }}
      >

        <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index &&
                styles.activeDot,
            ]}
          />
        ))}
      </View>
        
      </View>

      
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 30,
    backgroundColor: '#6CC51D',
  },
});



// import React, { useRef, useState, useEffect } from 'react';
// import {
//   View,
//   FlatList,
//   Image,
//   Dimensions,
// } from 'react-native';

// const { width } = Dimensions.get('window');

// const ImageSlider = ({ images, interval = 3000 }) => {
//   const flatListRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const nextIndex =
//         (currentIndex + 1) % images.length;

//       flatListRef.current?.scrollToIndex({
//         index: nextIndex,
//         animated: true,
//       });

//       setCurrentIndex(nextIndex);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   return (
//     <FlatList
//       ref={flatListRef}
//       data={images}
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//       keyExtractor={(_, index) => index.toString()}
//       renderItem={({ item }) => (
//         <Image
//           source={
//             typeof item === 'string'
//               ? { uri: item }
//               : item
//           }
//           style={{
//             width,
//             height: 200,
//           }}
//         />
//       )}
//     />
//   );
// };

// export default ImageSlider;