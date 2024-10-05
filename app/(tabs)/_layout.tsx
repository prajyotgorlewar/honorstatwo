import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#F26522', // Focused tab icon color
        tabBarInactiveTintColor: 'gray', // Inactive tab icon color
        tabBarStyle: { backgroundColor: 'white' }, // Tab bar background color set to white
        tabBarShowLabel: false, // Hides the text labels below icons
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="swap-horizontal-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="voucher"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="article"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="article" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
