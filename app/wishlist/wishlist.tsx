import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const data = [
  {
    id: '1',
    name: 'AERO SPORT INFINITY PRO',
    category: 'Footwear',
    price: 'Rp400.000',
    image: require('@/assets/images/product1.png'), // Replace with your actual image paths
  },
  {
    id: '2',
    name: 'SPORT+ INVINCIBLE PRO',
    category: 'Footwear',
    price: 'Rp389.000',
    image: require('@/assets/images/product1.png'), // Replace with your actual image paths
  },
  {
    id: '3',
    name: 'SPORT SNEAKERS+ BLUE',
    category: 'Footwear',
    price: 'Rp200.000',
    image: require('@/assets/images/product1.png'), // Replace with your actual image paths
  },
  {
    id: '4',
    name: 'SPORT+ INVINCIBLE MAX',
    category: 'Footwear',
    price: 'Rp399.000',
    image: require('@/assets/images/product1.png'), // Replace with your actual image paths
  },
];

const WishlistScreen = () => {
  const renderItem = ({ item }: { item: { image: any; name: string; category: string; price: string } }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WISHLIST</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // To display items in a grid
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff', // Background color of the wishlist screen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Center align the title
  },
  productCard: {
    flex: 1,
    margin: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f8f8f8', // Card background color
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8, // Round the corners of the image
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productCategory: {
    fontSize: 14,
    color: '#777', // Gray color for category
  },
  productPrice: {
    fontSize: 16,
    color: '#333', // Darker color for price
    fontWeight: 'bold',
  },
  columnWrapper: {
    justifyContent: 'space-between', // Space between columns
  },
});

export default WishlistScreen;
