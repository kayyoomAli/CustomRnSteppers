
# Project Title

A simple and fully customizable React Native component to create Animated Steppers.


## Table of content
* Installation.  
* Usage.  
* Props
* Example.  
## Installation
## Props
| Props | Type | Description |  
| --------- | ------- | ------ |
| item | any | item(data) that are rendered parllel to points|
| count | number | number of status in data are true|
| startTime | number| startTime of animation|
| lastElement | number| startTime of animation|
| widthofline | number| width if line in RNsteppers|
| animatedValue | number| animated value from where to start |
| heightOfline | number| height of line in RNsteppers|
| heightOfCircle | number| height of Circle in RNsteppers|
| AnimatedColor | string| AnimatedColor take string type of color ('green')|
| StepperBackgroundColor | string| AnimatedColor take string type of color ('lightgrey') |

## Screenshots
<img src="https://user-images.githubusercontent.com/103027059/193255074-d9eda348-09c4-4b71-bb11-d806dab42e63.png" height="400" width="200"/>
<img src="https://user-images.githubusercontent.com/103027059/193255293-a3436aec-46c6-49e8-85c2-428f50f8c060.png" height="400" width="200"/>

## Example

import React from 'react';
import LineAnimated from './LineAnimated';
import {data} from '../utils/flatListData';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

const StepProgressBar = () => {
  const lastElement = data.length - 1;
  var count = 0;
  data.map(item => {
    if (item.status === false) {
      count++;
    }
  });

  const _renderitem = ({item, index}: any) => {
    return (
      <LineAnimated
        item={item}
        index={index}
        count={count}
        status={item?.status}
        startTime={2000 * index}
        lastElement={lastElement}
        animatedValue={-220 * item?.key}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={_renderitem} scrollEnabled={false} />
    </SafeAreaView>
  );
};

export default React.memo(StepProgressBar);

