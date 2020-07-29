import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, ImageBackground, ScrollView, Dimensions } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons'


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
    const initialGuess = generateRandomBetween(1, 100, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess])
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
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
                currentLow.current = currentGuess + 1
            }
        }
        const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextGuess)
        setPastGuesses(curPastGuesses => [nextGuess, ...curPastGuesses])
    }

    let counter = pastGuesses.length
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../assets/images/numberBackground.png')} style={styles.backgroundImage}>
                <Card style={styles.card}>
                    <Text style={styles.description}>Phone's Current Guess</Text>
                    <Text style={styles.currentGuess}>{currentGuess}</Text>
                    <View style={styles.buttonContainer}>
                        <Ionicons name='ios-arrow-dropdown-circle' color={Colors.primary} size={60} onPress={() => nextGuessHandle('lower')} />
                        <Ionicons name='ios-arrow-dropup-circle' color={Colors.primary} size={60} onPress={() => nextGuessHandle('higher')} />
                    </View>
                </Card>
                <Text style={styles.title}>Num of Guesses: {pastGuesses.length}</Text>
                <ScrollView>
                    {pastGuesses.map(guess => {
                        return <View key={guess} ><Text style={styles.guesses}>#{counter--}        {guess}</Text></View>
                    })}
                </ScrollView>
            </ImageBackground>
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
        width: Dimensions.get('window').width / 1.3,
        borderColor: Colors.secondary,
        borderWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        width: 175,
        maxWidth: '80%'
    },
    currentGuess: {
        fontSize: 60,
        color: Colors.third,
        fontFamily: 'monoton-regular'

    },
    description: {
        color: Colors.secondary,
        fontSize: 30,
        fontFamily: 'covered-by-your-grace'
    },
    title: {
        fontSize: 35,
        color: Colors.fourth,
        fontFamily: 'covered-by-your-grace',
        borderColor: Colors.secondary,
        borderWidth: 2,
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 1.3,
        textAlign: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: 600,
        height: 600,
    },
    guesses: {
        textAlign: 'center',
        fontFamily: 'covered-by-your-grace',
        fontSize: 30,
        color: Colors.secondary,
        borderColor: Colors.secondary,
        borderWidth: 2,
        marginVertical: 4,
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 1.3

    }
})

export default GameScreen