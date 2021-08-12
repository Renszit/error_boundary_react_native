import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FallbackUI = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Text>PLEASE RELOAD THIS APP</Text>
    </View>
  );
};
