import React from 'react'
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { useSpring, animated } from 'react-spring'

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
                <ImageBackground source={require('../assets/images/numberBackground.png')} style={styles.backgroundImage}>
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
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        marginVertical: 20,
        color: Colors.fourth,
        fontFamily: 'covered-by-your-grace',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'

    },
    buttonContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * .7,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    resetButton: {
        width: 100
    },
    confirmButton: {
        // uses Dimensions API to determine screen size of device
        // width: '40%' is similar to below..but percentage pertains 
        // to parent container..Dimensions.get('window') uses the width
        // of the device
        width: Dimensions.get('window').width / 4
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
        padding: 1,
        marginVertical: 5,
        fontFamily: 'monoton-regular'
    },
    description: {
        color: Colors.secondary,
        fontSize: 30,
        fontFamily: 'covered-by-your-grace'
    },
    startGameButton: {
        width: 150
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: 600,
        height: 600,

    }
})

export default StartGameScreen