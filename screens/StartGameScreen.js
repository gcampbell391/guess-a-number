import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    //Handles the input text change
    const numberInputHandle = text => {
        //Handles if a user enters something other than a number 
        setEnteredValue(text.replace(/[^0-9]/g, ''))
    }

    //Resets user input
    const resetValues = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    //Confirms user input
    const confirmValues = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Please enter a number that is greater than 0 and less than 100',
                [{ text: 'Try Again', style: 'destructive', onPress: resetValues }])
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Card style={styles.confirmedOutput}>
            <Text style={styles.description}>Chosen Number</Text>
            <Text style={styles.chosenNumber}>{selectedNumber}</Text>
            <View style={styles.startGameButton}>
                <Button title='Start Game' color={Colors.primary} />
            </View>
        </Card>
    }

    return (
        //This callback will dismiss the keyboard if the user clicks on the screen outside of the keypad or input
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start A New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.description}>Select a Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={numberInputHandle}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.confirmButton} >
                            <Button title="Confirm" color={Colors.primary} onPress={confirmValues} />
                        </View>
                        <View style={styles.resetButton}>
                            <Button title="Reset" color={Colors.third} onPress={resetValues} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        // backgroundColor: Colors.primary
    },
    title: {
        fontSize: 30,
        marginVertical: 20,
        color: 'white'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    resetButton: {
        width: 100
    },
    confirmButton: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    confirmedOutput: {
        marginVertical: 20,
        alignItems: 'center',
        width: 300
    },
    chosenNumber: {
        fontSize: 60,
        color: Colors.third,
        padding: 5,
        marginVertical: 10
    },
    description: {
        color: Colors.secondary,
        fontSize: 20
    },
    startGameButton: {
        width: 150
    }
})

export default StartGameScreen