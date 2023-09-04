import {
    View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity, Switch,
    StatusBar,
    ActivityIndicator,
    Modal,
    TouchableHighlight,
    Alert,
    Pressable,
    Platform
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import React, { useState } from 'react';

export default function TweetScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.flexRow}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://reactnative.dev/img/header_logo.svg',
                        }} />
                    <View>
                        <Text style={styles.tweetName}>Andre Madatang</Text>
                        <Text style={styles.tweetHandle}>@chert</Text>
                    </View>
                </TouchableOpacity>
                {/* <Text>Tweet Screen</Text> */}
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="grey" />
                </TouchableOpacity>
            </View>

            <View style={styles.tweetContentContainer}>
                <Text style={styles.tweetContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi voluptate error! Temporibus deleniti quos perspiciatis corrupti consectetur pariatur! Consectetur nostrum officia ex sequi magnam inventore, doloribus velit deleniti? Perferendis!
                </Text>
            </View>

            <View style={styles.tweetEngagement}>
                <View style={styles.flexRow}>
                    <Text style={styles.tweetEngagementNumber}>628</Text>
                    <Text style={styles.tweetEngagementLabel}>Retweets</Text>
                </View>
                <View style={[styles.flexRow, styles.ml4]}>
                    <Text style={styles.tweetEngagementNumber}>28</Text>
                    <Text style={styles.tweetEngagementLabel}>Quete tweets</Text>
                </View>
                <View style={[styles.flexRow, styles.ml4]}>
                    <Text style={styles.tweetEngagementNumber}>38</Text>
                    <Text style={styles.tweetEngagementLabel}>Likes</Text>
                </View>
            </View>

            <View style={[styles.tweetEngagement, styles.spaceAround]}>
                <TouchableOpacity >
                    <EvilIcons name="comment" size={32} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity >
                    <EvilIcons name="retweet" size={32} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity >
                    <EvilIcons name="heart" size={32} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity >
                    <EvilIcons 
                    name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
                    size={32} 
                    color="gray" />
                </TouchableOpacity>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    tweetContentContainer: {
        // flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomColor: '#e5e7eb',
        borderBottomWidth: 1,
    },
    tweetContent: {
        fontSize: 20,
        lineHeight: 30,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    flexRow: {
        flexDirection: 'row',

    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 8,
        borderRadius: 25,
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222'

    },
    tweetHandle: {
        color: 'gray',
        marginTop: 4,
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    tweetEngagementNumber: {
        fontWeight: 'bold',
    },
    tweetEngagementLabel: {
        color: 'gray',
        marginLeft: 4
    },
    ml4: {
        marginLeft: 16,
    },
    spaceAround: {
        justifyContent: 'space-around',
    },
});