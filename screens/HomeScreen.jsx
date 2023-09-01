import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

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

    const renderItem = ({ item }) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={() => gotoProfile()}>

                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://reactnative.dev/img/header_logo.svg',
                    }} />
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={styles.flexRow}>

                    <Text style={styles.tweetName}>{item.title}</Text>
                    <Text  style={styles.tweetHandle}>@drehimseld</Text>
                    <Text>&middot;</Text>
                    <Text  style={styles.tweetHandle}>9m</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    tweetContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12
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
    }
});