import React, { useState } from "react"
import { Button, Modal, StyleSheet, View } from "react-native"
import { Duelists } from "../../models"
import Calculator from "../universal/CalculatorModal"

enum ModalState {
  OFF,
  CALCULATOR,
  COIN,
  DICE
}

interface UtilityViewIconsProps {
  // updateLifepoints: (duelist: Duelists, updatedLifepoints: number) => void
}

const UtilityViewIcons: React.FunctionComponent<UtilityViewIconsProps> = (props) => {
  const [modalToggledState, updateModalToggledState] = useState<ModalState>(ModalState.OFF)



  return (
    <View style={styles.container}>
      <Button title='Dice' />
      <Button title='Coin' />
      <Button title='Refresh' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})


export default UtilityViewIcons
