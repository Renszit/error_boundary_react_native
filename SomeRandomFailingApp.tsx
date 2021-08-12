import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const SomeRandomFailingApp = () => {
  useEffect(() => {
    throw new Error('I crashed!');
  }, []);
  return (
    <View>
      <Text>SOME RANDOM FAILING APP</Text>
    </View>
  );
};

export default SomeRandomFailingApp;
