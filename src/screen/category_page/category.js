import React, { memo } from 'react';
import { View, Text, Button, Linking } from 'react-native';

const Category = ({ route, navigation}) => {
  const { name } = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{name}</Text>
      <Button
        title="Click Me"
        onPress={() => {
          // Linking.openURL('https://google.com');
          navigation.goBack();
        }}
      />
      
      
    </View>
  );
};

export default Category;