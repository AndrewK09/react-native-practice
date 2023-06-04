import React, { useState } from "react"
import { Duelists } from "../../models"
import { Modal, StyleSheet, Text, View } from "react-native"
import LifepointButton from "./LifepointButton"
import Calculator from "../universal/CalculatorModal"

interface LifepointViewProps {
  lifepoints: {
    [Duelists.A]: number,
    [Duelists.B]: number,
  },

  updateLifepoints: (duelist: Duelists, updatedLifepoints: number) => void
  isReverse?: boolean
}

const LifepointView: React.FunctionComponent<LifepointViewProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [duelist, setDuelist] = useState<Duelists | null>(null)


  const handleCalculatorOpen = (duelist: Duelists) => () => {
    setDuelist(duelist)
    // setIsModalOpen(true)
  }

  const handleCalculatorClose = () => {
    setDuelist(null)
    // setIsModalOpen(false)
  }

  const handleLifepointUpdate = (duelist: Duelists) => (updatedLifepoint: number) => {
    props.updateLifepoints(duelist, updatedLifepoint)
  }


  const player = props.isReverse ? Duelists.B : Duelists.A
  const opponent = props.isReverse ? Duelists.A : Duelists.B

  return (
    <View style={styles.container}>

      <View style={styles.right}>
        <Text>Opponent</Text>
        <LifepointButton
          lifepoints={props.lifepoints[opponent]}
          handleCalculatorOpen={handleCalculatorOpen(opponent)}
        />
      </View>

      <View style={styles.left}>
        <Text>Me</Text>

        <LifepointButton
          lifepoints={props.lifepoints[player]}
          handleCalculatorOpen={handleCalculatorOpen(player)}
        />
      </View>

      {

        (duelist &&
          <View style={styles.modal}>
            <Calculator
              lifepoints={props.lifepoints[duelist]}
              handleCalculatorClose={handleCalculatorClose}
              handleLifepointUpdate={handleLifepointUpdate(duelist)}
            />
          </View>
        )
      }




    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'green',
    borderWidth: 2,
    height: '100%',
    backgroundColor: 'green',
    justifyContent: 'space-around',
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  reverse: {
    transform: [{ rotate: '180deg' }]
  },
  left: {
    // alignContent: 'flex-start'

  },
  right: {
    alignSelf: 'flex-end'

  }
})

export default LifepointView

