// import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity, Switch, StatusBar, Platform, _View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    const DATA = [
        { "id": 1, "title": "Item 1" },
        { "id": 2, "title": "Item 2" },
        { "id": 3, "title": "Item 3" },
        { "id": 4, "title": "Item 4" },
        { "id": 5, "title": "Item 5" },
        { "id": 6, "title": "Item 6" },
        { "id": 7, "title": "Item 7" },
        { "id": 8, "title": "Item 8" },
        { "id": 9, "title": "Item 9" },
        { "id": 10, "title": "Item 10" }
    ];

    function gotoProfile() {
        navigation.navigate('Profile Screen');
    }

    function gotoSingleTweet() {
        navigation.navigate('Tweet Screen');
    }

    function gotoNewTweet() {
        navigation.navigate('New Tweet');
    }

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => gotoProfile()}>

                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://reactnative.dev/img/header_logo.svg',
                    }} />
            </TouchableOpacity>
            <View style={styles.tweet}>
                <TouchableOpacity style={styles.flexRow} onPress={() => gotoSingleTweet()}>

                    <Text numberOfLines={1} style={styles.tweetName}>
                        {item.title}
                    </Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>@drehimseld</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>9m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotoSingleTweet()}>
                    <Text style={styles.tweetContent}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit iusto consequatur. Porro culpa reprehenderit quam blanditiis laudantium est eaque deserunt! Dignissimos corrupti quaerat quos accusantium. Dolorum similique aliquam nobis.
                    </Text>
                </TouchableOpacity>
                <View style={styles.tweetEngagement}>
                    <TouchableOpacity style={styles.flexRow}>
                        <EvilIcons name="comment" size={20} color="gray" />
                        <Text style={[styles.textGray, styles.pt3]}>456</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons
                            name="retweet"
                            size={20} color="gray"
                            style={{ marginRight: 2 }}
                        />
                        <Text style={[styles.textGray, styles.pt3]}>232</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons
                            name="heart"
                            size={20} color="gray"
                            style={{ marginRight: 2 }}
                        />
                        <Text style={[styles.textGray, styles.pt3]}>4,322</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons
                            name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
                            size={20} color="gray"
                            style={{ marginRight: 2 }}
                        />
                        <Text style={[styles.textGray, styles.pt3]}>4,322</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
            />

            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => gotoNewTweet()}
            >
                <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
            <Text>Home Screen / Feed</Text>
            {/* <Button
                title='New Tweet'
                onPress={() => navigation.navigate('New Tweet')}
            />
            <Button
                title='Tweet Screen'
                onPress={() => navigation.navigate('Tweet Screen')}
            />
            <Button
                title='Profile Screen'
                onPress={() => navigation.navigate('Profile Screen')}
            /> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    tweet: {
        flex: 1,
        // width: '85%',
        // flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    tweetContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    tweetSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    avatar: {
        width: 42,
        height: 42,
        marginRight: 8,
        borderRadius: 21,
    },
    flexRow: {
        flexDirection: 'row',

    },
    tweetHandle: {
        marginHorizontal: 8,
        color: 'gray'
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222'
    },
    tweetContent: {
        lineHeight: 22,
    },
    tweetContentContainer: {
        marginTop: 4,
    },
    textGray: {
        color: 'gray',

        alignItems: 'center',
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12
    },
    floatingButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1d9bf1",
        position: 'absolute',
        bottom: 20,
        right: 12
    },  
    ml4: {
        marginLeft: 4,
    },
    pt3: {
        paddingTop: 3,
    }

});