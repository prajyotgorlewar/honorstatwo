import React from 'react';
import { Image, StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Top Bar and Search */}
      <View style={styles.topBar}>
        <Text style={styles.brand}>Sport Shoes</Text>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          <Feather name="shopping-cart" size={24} color="black" style={styles.icon} />
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search items" style={styles.searchInput} />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Wallet Balance */}
      <View style={styles.walletSection}>
        <View style={styles.walletInfo}>
          <Text style={styles.walletText}>Wallet balance</Text>
          <Text style={styles.walletAmount}>Rp1.000.000</Text>
        </View>
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.topUpText}>Top up balance</Text>
        </TouchableOpacity>
      </View>

      {/* Banner Section */}
      <Image source={require('@/assets/images/banner.png')} style={styles.banner} />

      {/* Categories */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>SHOP BY CATEGORY</Text>
        <View style={styles.categories}>
        <View style={styles.categoryBox}>
  <FontAwesome5 name="shoe-prints" size={24} color="black" style={styles.rotatedIcon} />
  <Text style={styles.categoryText}>FOOTWEAR</Text>
</View>

          <View style={styles.categoryBox}>
            <MaterialCommunityIcons name="bag-personal" size={24} color="black" />
            <Text style={styles.categoryText}>BAGS</Text>
          </View>
          <View style={styles.categoryBox}>
            <FontAwesome5 name="tshirt" size={24} color="black" />
            <Text style={styles.categoryText}>APPAREL</Text>
          </View>
        </View>
      </View>

      {/* Products Section */}
      <View style={styles.productsSection}>
        <Text style={styles.sectionTitle}>FOR YOU</Text>
        <View style={styles.products}>
          <View style={styles.productCard}>
            <Image source={require('@/assets/images/product1.png')} style={styles.productImage} />
            <Text style={styles.productName}>Aero Lightweight</Text>
            <Text style={styles.productCategory}>Apparel</Text>
            <Text style={styles.productPrice}>Rp200.000</Text>
          </View>
          <View style={styles.productCard}>
            <Image source={require('@/assets/images/product1.png')} style={styles.productImage} />
            <Text style={styles.productName}>Aero Sport Infinity Max</Text>
            <Text style={styles.productCategory}>Footwear</Text>
            <Text style={styles.productPrice}>Rp450.000</Text>
          </View>
        </View>
        <View style={styles.products}>
          <View style={styles.productCard}>
            <Image source={require('@/assets/images/product1.png')} style={styles.productImage} />
            <Text style={styles.productName}>Sport+ Runner Blue Edition</Text>
            <Text style={styles.productCategory}>Footwear</Text>
            <Text style={styles.productPrice}>Rp250.000</Text>
          </View>
          <View style={styles.productCard}>
            <Image source={require('@/assets/images/product1.png')} style={styles.productImage} />
            <Text style={styles.productName}>Sport+ Bag</Text>
            <Text style={styles.productCategory}>Bag</Text>
            <Text style={styles.productPrice}>Rp350.000</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4500',
    fontStyle: 'italic', // Add this line to make the font italic
},

  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#FF4500',
    borderRadius: 10,
    padding: 8,
  },
  walletSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  walletInfo: {
    flex: 1,
  },
  walletText: {
    fontSize: 14,
    color: '#666',
  },
  walletAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  topUpButton: {
    backgroundColor: '#FF4500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  topUpText: {
    color: 'white',
  },
  banner: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginVertical: 10,
  },
  categoriesSection: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryBox: {
    alignItems: 'center',
  },
  rotatedIcon: {
    transform: [{ rotate: '-90deg' }],  // Rotate only the icon by -90 degrees
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
  },
  productsSection: {
    marginBottom: 20,
  },
  products: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productCard: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    marginBottom: 15,
  },
  productImage: {
    width: '100%',
    height: 150,
    
    borderRadius: 10,
  },
  productName: {
      // Apply Roboto Condensed Bold font
    fontSize: 16,
    textTransform: 'uppercase',  // Make the text uppercase to match Bebas Neue style
    marginVertical: 5,
    fontFamily: 'Roboto Condensed Bold',  // Apply Roboto Condensed Bold font
  },
  productCategory: {
    fontSize: 12,
    color: '#888',
  },
  productPrice: {
    fontSize: 16,
    color: '#FF4500',
    fontWeight: 'bold',
  },
});
