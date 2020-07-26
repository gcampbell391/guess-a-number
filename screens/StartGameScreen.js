import React from 'react'
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = (props) => {

    let confirmedOutput;

    if (props.confirmed) {
        confirmedOutput = <Card style={styles.confirmedOutput}>
            <Text style={styles.description}>Chosen Number</Text>
            <Text style={styles.chosenNumber}>{props.selectedNumber}</Text>
            <View style={styles.startGameButton}>
                <Button title='Start Game' color={Colors.primary} onPress={props.handleStartGame} />
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
                        value={props.enteredValue}
                        onChangeText={props.numberInputHandle}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.confirmButton} >
                            <Button title="Confirm" color={Colors.primary} onPress={props.confirmValues} />
                        </View>
                        <View style={styles.resetButton}>
                            <Button title="Reset" color={Colors.third} onPress={props.resetValues} />
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
        color: Colors.fourth
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
        paddingHorizontal: 15,
        paddingVertical: 10
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
        color: Colors.fourth,
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