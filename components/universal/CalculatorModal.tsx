import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, Touchable, TouchableHighlight, View } from 'react-native'
import { Duelists } from '../../models'

enum OperationType {
  ADD = '+',
  SUBTRACT = '-'
}


const icons = [
  '7', '8', '9',
  '4', '5', '6',
  '1', '2', '3',
  '0', '00', '000',
  'CLR', '+', '-',
  '='
]

const Calculator: React.FunctionComponent<CalculatorProps> = (props) => {
  const [lifepointChange, setLifepointChange] = useState('')
  const [operation, setOperation] = useState<OperationType>(OperationType.SUBTRACT)

  const handlePress = (symbol) => {
    switch (symbol) {
      case '0':
      case '00':
      case '000':
        if (lifepointChange) setLifepointChange(lifepointChange + symbol)
        return
      case 'CLR':
        setLifepointChange('')
        return
      case '/2':
        setLifepointChange(Math.floor(+lifepointChange / 2).toString())
        return
      case '+':
      case '-':
        setOperation(symbol)
        return
      case '=':
        const numberToAddOrSubtract = parseInt(lifepointChange + getPadding(lifepointChange))

        const updatedLifepoint = operation === "+" ? props.lifepoints + numberToAddOrSubtract : props.lifepoints - numberToAddOrSubtract
        props.handleLifepointUpdate(updatedLifepoint > 0 ? updatedLifepoint : 0)
        props.handleCalculatorClose()
        return
      default:
        setLifepointChange(lifepointChange + symbol)
        return
    }
  }


  const getPadding = (lifepoints: string): string => {
    if (lifepoints.length === 1 || lifepoints.length === 2) {
      return '00'
    }

    return ''
  }

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Button title='<-' onPress={props.handleCalculatorClose} />

        <Text style={styles.lifepointText}>{`${props.lifepoints} ${operation} ${lifepointChange}`}</Text>
        <Text style={[styles.lifepointPaddingText, styles.lifepointText]}>{getPadding(lifepointChange)}</Text>
      </View>

      <View style={styles.symbols}>
        {icons.map(symbol => (
          <TouchableHighlight
            underlayColor='white'
            onPress={() => { handlePress(symbol) }}
            style={[styles.symbolContainer, symbol === '=' && { width: '100%' }]}>

            <Text style={styles.symbolText}>
              {symbol}
            </Text>

          </TouchableHighlight>
        ))}
      </View>
    </View>

    // </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'yellow',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bar: {
    flex: 1.5,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    marginBottom: 3
  },
  barSymbol: {
    marginRight: 3
  },

  lifepointText: {
    fontSize: 35,
    fontWeight: '700'
  },

  lifepointPaddingText: {
    color: 'gray'
  },

  symbols: {
    flex: 8,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  symbolContainer: {
    width: '32.5%',
    height: '15%',
    borderColor: 'blue',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    textAlign: 'center'
  },

  symbolText: {
    fontSize: 30,
    fontWeight: '900'
  },

})

export default Calculator

interface CalculatorProps {
  lifepoints: number,
  handleLifepointUpdate: (updatedLifepoint: number) => void
  handleCalculatorClose: () => void
}