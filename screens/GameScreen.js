import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors';


//Generate random Number helper method
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    }
    else {
        return rndNum
    }
}

const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const [guessTotal, setGuessTotal] = useState(1)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(guessTotal)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandle = (direction) => {
        if (direction === 'lower') {
            if (userChoice > currentGuess) {
                Alert.alert(
                    'Don\'t Lie!',
                    "Cheating isn't the soltuion",
                    [{ text: 'Try Again', style: 'destructive' }])
                return
            }
            else {
                //Answer
                currentHigh.current = currentGuess
            }
        }
        else if (direction === 'higher') {
            if (userChoice < currentGuess) {
                Alert.alert(
                    'Don\'t Lie!',
                    "Cheating isn't the soltuion",
                    [{ text: 'Try Again', style: 'destructive' }])
                return
            }
            else {
                //Answer
                currentLow.current = currentGuess
            }
        }
        const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextGuess)
        setGuessTotal(guessTotal + 1)
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Number of Guesses: {guessTotal}</Text>
            <Card style={styles.card}>
                <Text style={styles.description}>Computer's Guess</Text>
                <Text style={styles.currentGuess}>{currentGuess}</Text>
                <View style={styles.buttonContainer}>
                    <Button title='Lower' color={Colors.primary} style={styles.button} onPress={() => nextGuessHandle('lower')} />
                    <Button title='Higher' color={Colors.primary} style={styles.button} onPress={() => nextGuessHandle('higher')} />
                </View>
            </Card>
        </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    card: {
        marginVertical: 20,
        alignItems: 'center',
        width: 300
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    currentGuess: {
        fontSize: 60,
        color: Colors.third,
        padding: 5,
        marginVertical: 10
    },
    description: {
        color: Colors.secondary,
        fontSize: 20
    },
    button: {
        width: 100
    },
    title: {
        fontSize: 30,
        marginVertical: 20,
        color: Colors.fourth
    }
})

export default GameScreen