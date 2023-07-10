import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListScreen = () => {
  const arr = [
    {name: 'Forest', src: require('../../assets/images/forest.jpg'), score: 9},
    {name: 'Beach', src: require('../../assets/images/beach.jpg'), score: 7},
    {
      name: 'Mountain',
      src: require('../../assets/images/mountain.jpg'),
      score: 4,
    },
  ];

  return (
    <FlatList
      keyExtractor={ele => ele.name}
      data={arr}
      renderItem={({item}) => {
        return (
          <View>
            <Image source={item.src} />
            <Text>{item.name}</Text>
            <Text>Image Score - {item.score}</Text>
          </View>
        );
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
