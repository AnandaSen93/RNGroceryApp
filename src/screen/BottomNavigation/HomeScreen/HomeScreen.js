import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Dimensions
} from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageSlider from '../../../component/ImageSlider';

const SCREEN_WIDTH = Dimensions.get('window').width;


const HomeScreen = () => {

    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "David" },
        { id: 2, name: "David" }, { id: 2, name: "David" }, { id: 2, name: "David" }, { id: 2, name: "David" }, { id: 2, name: "David" }, { id: 2, name: "David" }, { id: 2, name: "David" }, { id: 2, name: "David" }, { id: 2, name: "David" }, { id: 2, name: "David" }, { id: 2, name: "David" },
    ];
    const [loading, setLoading] = useState(false);

    const loadMore = () => {
        console.log('Load More');
    };

    const refresh = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };



    return (

        <ScrollView
            style={styles.scrollViewStyle}
        >

            {/* Search Section */}
            <View style={styles.searchContainerStyle}>
                <Image
                    source={require('../../../assets/images/search.png')}
                    style={styles.iconStyle}
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
                    style={styles.iconStyle}
                />
            </View>


            {/* Slider Section */}

            <ImageSlider
                images={[
                    require('../../../assets/images/banner.png'),
                    require('../../../assets/images/banner.png'),
                    require('../../../assets/images/banner.png')]
                }
            />

            <View style={styles.headingStyle}>
                <Text style={styles.headingTextStyle}>Categories</Text>


                <FlatList
                    horizontal

                    data={users}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View
                                style={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: '#fff',
                                    borderRadius: 40,
                                    marginBottom: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Image source={require('../../../assets/images/filter.png')}
                                    style={styles.iconStyle} />
                            </View>
                            <Text style={styles.subHeadingTextStyle}>{item.name}</Text>
                        </View>
                    )}

                    // ListHeaderComponent={() => (
                    //     <Text
                    //         style={{
                    //             fontSize: 24,
                    //             textAlign: 'center',
                    //         }}>
                    //         Users
                    //     </Text>
                    // )}

                    // ListFooterComponent={() => (
                    //     <ActivityIndicator />
                    // )}

                    ItemSeparatorComponent={() => (
                        <View
                            style={{
                                width: 10,
                                height: 0,
                                backgroundColor: '#ccc',
                            }}
                        />
                    )}

                    refreshing={loading}
                    onRefresh={refresh}

                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}

                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    windowSize={11}
                    removeClippedSubviews
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 20,
                    }}
                />

            </View>


            <View style={styles.headingStyle}>
                <Text style={styles.headingTextStyle}>Featured products</Text>


                <FlatList

                    data={users}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                backgroundColor: '#FFF',
                                borderRadius: 10,
                                width: SCREEN_WIDTH * 0.45,
                                height: SCREEN_WIDTH * 0.6,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                margin: 5,
                                padding:15
                            }}>
                            <Image
                                source={require('../../../assets/images/productImage.png')}
                                style={{
                                    height:'60%',
                                    width:'80%'
                                }}
                            />

                            <Text>Price</Text>

                            <Text>Name</Text>

                            <Text>Details</Text>

                            <View
                                style={{
                                    width: '100%',
                                    height: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingHorizontal: 20,
                                    //backgroundColor: 'blue',
                                }}>
                                <Text>-</Text>
                                <Text>1</Text>
                                <Text>+</Text>
                            </View>
                        </View>
                    )}

                    // ListHeaderComponent={() => (
                    //     <Text
                    //         style={{
                    //             fontSize: 24,
                    //             textAlign: 'center',
                    //         }}>
                    //         Users
                    //     </Text>
                    // )}

                    // ListFooterComponent={() => (
                    //     <ActivityIndicator />
                    // )}

                    // For Gride view

                    // columnWrapperStyle={{
                    //     justifyContent: 'space-between',
                    //     padding: 5,
                    // }}

                    // ItemSeparatorComponent={() => (
                    //     <View
                    //         style={{
                    //             width: 10,
                    //             height: 10,
                    //             backgroundColor: '#ccc',
                    //         }}
                    //     />
                    // )}

                    refreshing={loading}
                    onRefresh={refresh}

                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}

                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    windowSize={11}
                    removeClippedSubviews
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 20,
                    }}
                />

            </View>





        </ScrollView>

    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    scrollViewStyle: {
        //  backgroundColor:'blue',
        paddingVertical: 20,
        paddingHorizontal: 15,
    },

    searchContainerStyle: {
        width: '100%',
        backgroundColor: '#DEDEDE',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'row'
    },

    iconStyle: { width: 20, height: 20 },
           headingStyle: {
        marginVertical: 10,

    },
    headingTextStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    subHeadingTextStyle: {
        color: '#17171784',
        fontSize: 15,
        fontWeight: 'regular',
        marginBottom: 10
    }



})