import React, { memo } from 'react'
import { View } from 'react-native'

const home = memo(() => {
  return (
   <View style = {{flex:1, justifyContent:'center',alignItems:'center'}}>
           <Text>Home</Text>
       </View>
  )
})

export default home