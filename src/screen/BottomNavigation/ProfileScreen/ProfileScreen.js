import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'


const ProfileScreen = () => {

   const list = [
        { id: 1, name: "About me" },
        { id: 2, name: "My Orders" },
        { id: 3, name: "My Favorites" },
        { id: 4, name: "My Address" },
        { id: 5, name: "Credit Cards" },
        { id: 6, name: "Transactions" },
        { id: 7, name: "Notifications" },
        { id: 8, name: "Sign out" },
        { id: 8, name: "Delete Account" },
   ]


  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer} />
      <View style={styles.bottomContainer} />
      <View style={styles.topLayerContainer}>

        <Image source={require('../../../assets/images/avatar.png')} style={styles.profileImagestyle} />
        <Text>Test Name</Text>
        <Text>Email Address</Text>
        <View style={{
          height: 50
        }}>
        </View>


          <FlatList
            data={list}
            style={{
              width:'85%'
            }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:"space-between",
                alignItems:'center',
                height:50,
                backgroundColor:'white',
                padding:15
              }}>
                <Image source={require('../../../assets/images/avatar.png')}
                style={styles.iconStyle}
                />
                <Text style={{width:'80%'}} >item.name</Text>
                <Image source={require('../../../assets/images/right_arrow.png')}
                style={styles.iconStyle}
                />

              </View>
            )}
          />

      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'green'
  },
  topContainer: {
    height: '15%',
    width: '100%',
    backgroundColor: 'white'
  },
  bottomContainer: {
    height: '85%',
    width: '100%',
    backgroundColor: '#ececec'
  },
  topLayerContainer: {
    position: 'absolute',
    height: '100%',
    top:0,
    left:0,
    right:0,
    flex: 1,
    alignItems: 'center',
    //backgroundColor: 'rgba(247, 247, 7, 0.11)'
  },
  profileImagestyle: {
    marginTop: 52,
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 10
  },
  iconStyle: { width: 20, height: 20 },


})