import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

const data = [
  {
    id: '1',
    name: 'AERO SPORT INFINITY PRO',
    category: 'Footwear',
    price: 'Rp400.000',
    image: require('@/assets/images/product5.png'), // Replace with your actual image paths
  },
  {
    id: '2',
    name: 'SPORT+ INVINCIBLE PRO',
    category: 'Footwear',
    price: 'Rp389.000',
    image: require('@/assets/images/product6.png'), // Replace with your actual image paths
  },
  {
    id: '3',
    name: 'SPORT SNEAKERS+ BLUE',
    category: 'Footwear',
    price: 'Rp200.000',
    image: require('@/assets/images/product7.png'), // Replace with your actual image paths
  },
  {
    id: '4',
    name: 'SPORT+ INVINCIBLE MAX',
    category: 'Footwear',
    price: 'Rp399.000',
    image: require('@/assets/images/product8.png'), // Replace with your actual image paths
  },
];

const WishlistScreen = ({ navigation }: any) => {
  const renderItem = ({ item }: { item: { image: any; name: string; category: string; price: string } }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} resizeMode="cover" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header with Back, Cart, and Notification Icons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/')}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>WISHLIST</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => router.push('/notification')}>
            <Ionicons name="notifications-outline" size={24} color="black" style={styles.headerIcons} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 15 }}>
            <Feather name="shopping-cart" size={24} color="black" style={styles.headerIcons} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Wishlist Items */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  productCard: {
    flex: 1,
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  productCategory: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#FF0000',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});


export default WishlistScreen;

export const config = {
  headerShown: false,  // Disable the default header for this page
};