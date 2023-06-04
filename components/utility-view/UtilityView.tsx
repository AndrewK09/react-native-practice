import React, { useState } from "react"
import { Modal, StyleSheet, View } from "react-native"
import { Duelists } from "../../models"
import Calculator from "../universal/CalculatorModal"
import UtilityViewIcons from "./UtilityViewIcons"

enum ModalState {
  OFF,
  CALCULATOR,
  COIN,
  DICE
}

interface UtilityViewProps {
  updateLifepoints: (duelist: Duelists, updatedLifepoints: number) => void
}

const UtilityView: React.FunctionComponent<UtilityViewProps> = (props) => {
  const [modalToggledState, updateModalToggledState] = useState<ModalState>(ModalState.OFF)


  // Show Bar with coin, dice, restart icons
  // Show all 3 modals, conditionally rendered

  return (
    <View style={styles.container}>
      <UtilityViewIcons />
      {
        (modalToggledState === ModalState.CALCULATOR)
          ? (<Calculator updateLifepoints={props.updateLifepoints} />)
          : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})


export default UtilityView
