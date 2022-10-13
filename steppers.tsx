import {vh, vw} from './dimensions';
import React, {useRef, useEffect, useState} from 'react';
import {Animated, Text, View} from 'react-native';

interface timeLineProps {
  index: any;
  item?: any;
  length?: any;
  count: number;
  status: boolean;
  widthOfline?: number;
  SizeOfcircle?: number;
  AnimatedColor?: string;
  backgroundColor?: string;
  renderItem?: ({item}: timeLineProps) => React.ReactNode;
}

export default function TimeLine({
  item,
  count,
  index,
  length,
  status,
  widthOfline = 6,
  SizeOfcircle = 20,
  AnimatedColor = 'green',
  backgroundColor = 'lightgrey',
  renderItem,
}: timeLineProps) {
  const [textcolor, settextColor] = useState(false);
  const timeLine = useRef(new Animated.Value(0)).current;
  const circlefill = useRef(new Animated.Value(0)).current;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    Animated.timing(circlefill, {
      toValue: 1,
      delay: 3000 * index,
      duration: 500,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) settextColor(true);
    });
    Animated.timing(timeLine, {
      toValue: 1,
      delay: 3000 * index,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
      <View style={{width: 30, alignItems: 'center'}}>
        <View
          style={[
            {
              overflow: 'hidden',
              height: SizeOfcircle,
              width: SizeOfcircle,
              borderRadius: SizeOfcircle / 2,
              backgroundColor: backgroundColor,
            },
          ]}>
          {status && (
            <Animated.View
              style={[
                {
                  opacity: circlefill,
                  height: SizeOfcircle,
                  width: SizeOfcircle,
                  backgroundColor: AnimatedColor,
                  borderRadius: SizeOfcircle / 2,
                },
              ]}
            />
          )}
        </View>

        {index < length - 1 ? (
          <View
            style={[
              {
                overflow: 'hidden',
                width: widthOfline,
                minHeight: height,
                marginHorizontal: vw(2),
                backgroundColor: backgroundColor,
              },
            ]}>
            {status && index < length - count && (
              <Animated.View
                style={[
                  {
                    width: widthOfline,
                    minHeight: height,
                    backgroundColor: AnimatedColor,
                  },
                  {
                    transform: [
                      {
                        translateY: timeLine.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-height, 0],
                        }),
                      },
                    ],
                  },
                ]}
              />
            )}
          </View>
        ) : null}
      </View>
      <View
        onLayout={event => {
          setHeight(event.nativeEvent.layout.height);
        }}
        style={{
          marginLeft: vh(10),
          opacity: textcolor && status ? 1 : 0.5,
          width: 300,
        }}>
        {renderItem ? (
          renderItem(item)
        ) : (
          <View>
            <Text
              style={[
                {
                  fontWeight: textcolor && status ? 'bold' : '500',
                },
              ]}>
              {item?.title}
            </Text>
            <Text
              style={{
                fontWeight: textcolor && status ? '500' : '400',
                width: 200,
              }}>
              {item?.SubTitle}
            </Text>
            <Text style={{color: 'grey'}}>{item?.date}</Text>
          </View>
        )}
      </View>
    </View>
  );
}