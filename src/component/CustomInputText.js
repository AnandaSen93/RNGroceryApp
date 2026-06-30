
import React from 'react'
import { TextInput } from 'react-native';

const CustomInputText = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
     <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={{
        borderWidth: 1,
        
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 25,
        height: 50,
      }}
    />
  )
}


export default CustomInputText;