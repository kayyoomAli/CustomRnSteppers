import {vh, vw} from '../utils/dimensions';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

interface Props {
  item?: any;
  index: number;
  count: number;
  status?: boolean;
  startTime: number;
  lastElement: number;
  widthofline?: number;
  animatedValue: number;
  heightOfline?: number;
  AnimatedColor?: string;
  // finalTextColor?:string,
  // intialTextColor?:string
  heightOfCircle?: number;
  StepperBackgroundColor?: string;
}

const LineAnimated = (props: Props) => {
  const {
    item,
    index,
    count,
    status,
    startTime,
    lastElement,
    animatedValue,
    widthofline = vh(5),
    heightOfline = vh(120),
    heightOfCircle = vh(20),
    AnimatedColor = 'green',
    // intialTextColor='black',
    // finalTextColor='black',
    StepperBackgroundColor = 'lightgrey',

  } = props;
  const [color, setColor] = useState(false);
  const circleFill = useRef(new Animated.Value(0)).current;
  const lineFill = useRef(new Animated.Value(animatedValue)).current;
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(circleFill, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) setColor(true);
        Animated.timing(lineFill, {
          toValue: heightOfCircle,
          duration: 1500,
          useNativeDriver: true,
        }).start();
      });
    }, startTime);
  }, []);
  

  return (
    <View style={{flexDirection: 'row'}} key={index}>
      {/*........................... Front Dark view start from here............. */}

      {status && (
        <View style={styles.MainViewContainerStyle}>
          <Animated.View
            style={[
              styles.circleViewStyle,
              {
                opacity: circleFill,
                height: heightOfCircle,
                width: heightOfCircle,
                borderRadius: heightOfCircle / 2,
                backgroundColor: AnimatedColor,
              },
            ]}></Animated.View>
          {status && index < lastElement - count && (
            <Animated.View
              style={[
                styles.lineViewAtyle,
                {
                  transform: [
                    {
                      translateY: lineFill,
                    },
                  ],
                  width: widthofline,
                  height: heightOfline,
                  backgroundColor: AnimatedColor,
                },
              ]}></Animated.View>
          )}
        </View>
      )}

      {/*........................... Front Dark view End from here............. */}

      {/*........................... Back light view start from here............. */}

      <View
        style={[
          styles.circlelightMainView,
          {width: heightOfCircle, alignItems: 'center'},
        ]}>
        <View
          style={[
            styles.lightcircleStlye,
            {
              width: heightOfCircle,
              height: heightOfCircle,
              borderRadius: heightOfCircle / 2,
              backgroundColor: StepperBackgroundColor,
            },
          ]}></View>
        {index < lastElement ? (
          <View
            style={[
              styles.lightlineViewStyle,
              {
                width: widthofline,
                height: heightOfline,
                backgroundColor: StepperBackgroundColor,
              },
            ]}></View>
        ) : null}
      </View>

      {/*...................... Back light view End from here..............  */}

      {/*...................... Data for parllel point start from here..............  */}

      <View style={styles.renderContainer}>
        <Animated.Text
          style={[
            styles.titleStyle,
            {color: color && status ? 'black' : 'grey'},
          ]}>
          {item?.title}
        </Animated.Text>
        <Animated.Text style={{color: color && status ? 'black' : 'grey'}}>
          {item?.SubTitle}
        </Animated.Text>
        <Text style={{color: 'grey'}}>{item?.date}</Text>
      </View>

      {/*...................... Data for parllel point End from here..............  */}
    </View>
  );
};

export default React.memo(LineAnimated);

const styles = StyleSheet.create({
  MainViewContainerStyle: {
    zIndex: 1,
    alignItems: 'center',
    position: 'absolute',
  },
  circleViewStyle: {
    height: vh(20),
    width: vh(20),
    borderRadius: vw(10),
    backgroundColor: 'green',
  },
  circlelightMainView: {
    width: vh(20),
    alignItems: 'center',
  },
  lineViewAtyle: {
    width: vw(5),
    height: vh(70),
    position: 'absolute',
    backgroundColor: 'green',
  },
  lightcircleStlye: {
    width: vh(20),
    height: vh(20),
    borderRadius: vh(10),
    backgroundColor: 'lightgrey',
  },
  lightlineViewStyle: {
    width: vw(5),
    height: vh(70),
    backgroundColor: 'lightgrey',
  },
  renderContainer: {
    marginLeft: vh(10),
  },
  titleStyle: {
    fontWeight: 'bold',
  },
});
