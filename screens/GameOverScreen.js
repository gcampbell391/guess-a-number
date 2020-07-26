import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'


const GameOverScreen = (props) => {

    let content = props.guessRounds <= 6 ? 'You Do Realize I\'m a Computer, Right?!' : 'Aww Geeez You Got Me!'
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Game Over</Text>
            <Card style={styles.card}>
                <Text style={styles.description}>You outwitted the computer for..</Text>
                <Text style={styles.rounds}>{props.guessRounds}</Text>
                <Text style={styles.description}>Rounds</Text>
                <Text style={styles.description}>Computer's Response:</Text>
                <Text style={styles.computerResponse}>{content}</Text>
                <Button title='Play Again' color={Colors.primary} onPress={props.handlePlayAgain} />
            </Card>
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
        fontSize: 16,
        paddingVertical: 3
    },
    rounds: {
        fontSize: 60,
        color: Colors.fourth,
        padding: 5,
        marginVertical: 10
    },
    computerResponse: {
        color: Colors.third,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10
    },
    title: {
        fontSize: 30,
        marginVertical: 20,
        color: Colors.fourth
    }
})

export default GameOverScreen