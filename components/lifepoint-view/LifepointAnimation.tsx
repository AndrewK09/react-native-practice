import React, { useEffect, useRef } from 'react';

import { StyleSheet, } from 'react-native';
import { useSpring, animated } from '@react-spring/native';
import usePrevious from '../hooks/usePrevious';





const LifepointAnimation = ({ lifepoints }: LifepointAnimationProps) => {
  const prevLifepointsRef = usePrevious(lifepoints)

  const { number } = useSpring({
    from: { number: prevLifepointsRef },
    number: lifepoints,
    delay: 200,
  });



  return (
    <animated.Text style={styles.container}>
      {number.to((n) => (n.toFixed(0)))}
    </animated.Text>
  );
}

export default LifepointAnimation

const styles = StyleSheet.create({
  container: {
    fontSize: 100,
  },
});

interface LifepointAnimationProps {
  lifepoints: number
}