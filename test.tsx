import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Ring from './ring';
const color = 'green';
const SIZE = 100;

const PhoneRingAnimated = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const anim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 2,
      },
    ).start();
  }, []);
  return (
    <View style={styles.MainContainer}>
      <Animated.View
        style={[
          styles.StaticCircleStyle,
          {
            height: SIZE * 2,
            width: SIZE * 2,
            borderRadius: SIZE,
            backgroundColor: 'lightgreen',
            opacity: anim,
            transform: [
              {
                scale: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.5],
                }),
              },
            ],
          },
        ]}
      />
      <View style={styles.StaticCircleStyle}></View>
    </View>
  );
};

export default PhoneRingAnimated;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  StaticCircleStyle: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

{
  /* {[...Array(3).keys()].map((_,index:any)=><Ring key={index}/>)} */
}
