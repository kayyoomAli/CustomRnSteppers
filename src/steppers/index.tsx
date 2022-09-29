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
        AnimatedColor={'black'}
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
