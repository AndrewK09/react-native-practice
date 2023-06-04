import React, { useState } from 'react';

import { Button, StyleSheet, View } from 'react-native';
import { Duelists, LIFEPOINTS } from './models';
import UtilityView from './components/utility-view/UtilityView';
import LifepointView from './components/lifepoint-view/LifepointView';




export default function App() {
  const [duelistA, updateDuelistA] = useState(LIFEPOINTS.TCG)
  const [duelistB, updateDuelistB] = useState(LIFEPOINTS.SPEED)


  const updateLifepoints = (duelist: Duelists, updatedLifepoints: number) => {
    console.log('duelist', duelist)
    if (duelist === Duelists.A) {
      updateDuelistA(updatedLifepoints)
    } else {
      updateDuelistB(updatedLifepoints)
    }
    // Update duelist A or B depending on which duelist was passed in
  }

  const lifepoints = {
    [Duelists.A]: duelistA,
    [Duelists.B]: duelistB,
  }

  return (

    <View style={styles.container}>
      <View style={[styles.lifepoint, styles.opponent]}>
        <LifepointView lifepoints={lifepoints} updateLifepoints={updateLifepoints} isReverse={true} />
      </View>
      <View style={styles.utility}>
        <UtilityView updateLifepoints={updateLifepoints} />
      </View>
      <View style={styles.lifepoint}>
        <LifepointView lifepoints={lifepoints} updateLifepoints={updateLifepoints} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  opponent: {
    transform: [{ rotate: '180deg' }]
  },
  lifepoint: {
    flex: 10
  },
  utility: {
    flex: 1
  }
});
