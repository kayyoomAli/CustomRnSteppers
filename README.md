
# Project Title

A simple and fully customizable React Native component to create Animated Steppers.


## Table of content
* Example.  
* Installation.  
* Usage.  
* Props
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








## Usage/Examples

```javascript
import React from 'react';
import AnimatedSteppers from './LineAnimated';
import {data} from '../utils/flatListData';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';

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
      <AnimatedSteppers
        item={item}
        index={index}
        count={count}
        status={item?.status}
        startTime={2000 * index}
        lastElement={lastElement}
        AnimatedColor={'dodgerblue'}
        animatedValue={-280 * item?.key}
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

important Note: data must have two mandatory value {status and key(key must be unique)}
```

