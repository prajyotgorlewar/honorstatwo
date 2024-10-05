import {Image, StyleSheet, ScrollView, Text, View, Pressable} from 'react-native';

import React from "react";
import {useNavigation} from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function NotificationScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.header}>
                {/* Back arrow */}
                <View style={styles.pageTitle}>
                    <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
                    </Pressable>
                    {/* Title */}
                    <Text style={styles.title}>NOTIFICATIONS</Text>
                </View>

                {/* Right-side Icons */}
                <View style={styles.rightIcons}>
                    <Pressable style={styles.markAsRead}>
                        <MaterialIcons name="done-all" size={24} color='#f26522' />
                        <Text style={{color: '#f26522'}}>Mark as read</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.notificationItem}>
                <Text style={styles.time}>Today, 10:20</Text>
                <Text style={styles.msgTitle}>LIMITED-TIME PROMO - UP TO 50% OFF!</Text>
                <Text style={styles.message}>Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!</Text>
            </View>

            <View style={styles.notificationItem}>
                <Text style={styles.time}>Today, 09:05</Text>
                <Text style={styles.msgTitle}>FLASH SALE ALERT - SAVE BIG TODAY!</Text>
                <Text style={styles.message}>Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices. This offer won't last long!</Text>
            </View>

            <View style={styles.notificationItem}>
                <Text style={styles.time}>Yesterday, 08:10</Text>
                <Text style={styles.msgTitle}>GOOD MORNING, RUNNER!</Text>
                <Text style={styles.message}>It's time to step out and run. Give your best to your body today. Find comfort in every step.</Text>
            </View>

            <View style={styles.notificationItem}>
                <Text style={styles.time}>July 13, 2023, 17:30</Text>
                <Text style={styles.msgTitle}>EXCLUSIVE DISCOUNT JUST FOR YOU</Text>
                <Text style={styles.message}>Hello loyal customers! We want to reward you with an exclusive 15% discount on all our shoe products. Use the code 'EXCLUSIVE15' at checkout.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: "100%",
    },
    backButton: {},
    pageTitle: {
        margin: 0,
        padding: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "55%",
    },
    title: {
        flex: 2,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    rightIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    markAsRead: {
        flexDirection: "row",
        justifyContent: "flex-end",
        color: '#f26522',
    },
    icon: {
        marginLeft: 15,
    },
    notificationItem: {
        marginBottom: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
    },
    time: {
        fontSize: 12,
        color: '#888',
        marginBottom: 5,
    },
    msgTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
        color: '#333',
    },
});

export const config = {
    headerShown: false,  // Disable the default header for this page
  };