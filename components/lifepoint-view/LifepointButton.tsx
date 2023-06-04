import React, { useState } from 'react';

import { Button, TouchableHighlight, View, Text, StyleSheet } from 'react-native';
import LifepointAnimation from './LifepointAnimation';

const LifepointButton = ({ lifepoints, handleCalculatorOpen }: LifepointButtonProps) => {

  return (
    <View style={styles.container}>
      <TouchableHighlight underlayColor='white' onPress={handleCalculatorOpen}>
        <View style={styles.button}>
          <LifepointAnimation lifepoints={lifepoints} />
        </View>
      </TouchableHighlight>

    </View>
  )
}

export default LifepointButton

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 2,

  },

  button: {
    backgroundColor: '#2196F3',
    width: 300,
    // height: 100,
    // flexDirection: 'row',
  }
})

interface LifepointButtonProps {
  lifepoints: number,
  handleCalculatorOpen: () => void,
}