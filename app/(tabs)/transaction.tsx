import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
              <Feather name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color, focused }) => (
              <Ionicons name="swap-horizontal-sharp" size={24} color="black" />
          ),
        }}
      />
        <Tabs.Screen
            name="voucher"
            options={{
                title: 'Voucher',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="black" />
                ),
            }}
        />
        <Tabs.Screen
            name="article"
            options={{
                title: 'Article',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialIcons name="article" size={24} color="black" />
                ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                tabBarIcon: ({ color, focused }) => (
                    <Octicons name="person" size={24} color="black" />
                ),
            }}
        />
    </Tabs>


  );
}