import React from 'react'
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'


const GameOverScreen = (props) => {

    let content = props.guessRounds <= 8 ? 'You Do Realize I\'m a Computer, Right?!' : 'Aww Geeez You Got Me!'
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../assets/images/numberBackground.png')} style={styles.backgroundImage}>
                <Card style={styles.card}>
                    <Text style={styles.title}>Game Over</Text>
                    <Text style={styles.description}>You outwitted the computer for..</Text>
                    <Text style={styles.rounds}>{props.guessRounds}</Text>
                    <Text style={styles.description}>Rounds</Text>
                    <Text style={styles.description}>Computer's Response:</Text>
                    <Text style={styles.computerResponse}>{content}</Text>
                    <Button title='Play Again' color={Colors.primary} onPress={props.handlePlayAgain} />
                </Card>
            </ImageBackground>
        </View>
    )
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
        width: 350
    },
    description: {
        color: Colors.secondary,
        fontSize: 25,
        paddingVertical: 3,
        fontFamily: 'covered-by-your-grace'
    },
    rounds: {
        fontSize: 60,
        color: Colors.fourth,
        padding: 5,
        marginVertical: 10,
        fontFamily: 'monoton-regular'
    },
    computerResponse: {
        color: Colors.third,
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: 'share-tech-mono'
    },
    title: {
        fontSize: 35,
        marginVertical: 5,
        color: Colors.fourth,
        fontFamily: 'covered-by-your-grace'
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

export default GameOverScreen