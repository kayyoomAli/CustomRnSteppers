import {SafeAreaView} from 'react-native';
import React from 'react';
import StepProgressBar from './src/steppers/index';
import PhoneRingAnimated from './test';

export default function App() {
  return (
    <SafeAreaView style={{marginVertical: 80, marginHorizontal: 30}}>
      <StepProgressBar/>
      {/* <PhoneRingAnimated /> */}
    </SafeAreaView>
  );
}
