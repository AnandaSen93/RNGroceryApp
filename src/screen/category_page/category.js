import React, { memo } from 'react'
import { View } from 'react-native'


const category = memo(() => {
  return (
    <View style = {{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>category</Text>
    </View>
  )
})

export default category