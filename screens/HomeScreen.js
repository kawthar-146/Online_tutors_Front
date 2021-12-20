import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';

// import Header from '../components/Header';
import Card from '../components/card';

const Tutors = [
  {
    name: 'John',
    type: 'Math',
    address: 'Beirut',
    image: require('../assets/Parent.png'),
    id: 1,
  },
  {
    name: 'Dani',
    type: 'French',
    address: 'Tripoli',
    image: require('../assets/online.png'),
    id: 2,
  },
  // {
  //   name: 'WildBread Bakery',
  //   categories: 'Cakes and Bakery, American, Sandwiches, Burgers',
  //   deliveryTime: '25 min',
  //   distance: '3 km',
  //   image: require('../../assets/wildbread-bakery.jpg'),
  //   id: 3,
  // },
  // {
  //   name: "McDonald's",
  //   categories: 'Fast Food, Burgers, Desserts',
  //   deliveryTime: '20 min',
  //   distance: '2.5 km',
  //   image: require('../../assets/mcdo.jpg'),
  //   id: 4,
  // },
  // {
  //   name: 'Jollibee',
  //   categories: 'Fast Food, Burgers, Desserts',
  //   deliveryTime: '25 min',
  //   distance: '3.1 km',
  //   image: require('../../assets/jollibee.jpg'),
  //   id: 5,
  // },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Header label="Food Central" /> */}
      {/* <Card /> */}
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={Tutors}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(Tutors) => Tutors.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c5ce7',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default HomeScreen;