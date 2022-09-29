import React from 'react';
import {StyleSheet, View} from 'react-native';

const SIZE = 100;

const Ring = () => {
  return (
    <View style={styles.MainContainer} />
    // </View>
  );
};

export default Ring;

const styles = StyleSheet.create({
  MainContainer: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: 'green',
    position: 'absolute',
  },
});
