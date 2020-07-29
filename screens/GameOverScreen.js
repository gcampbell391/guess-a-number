import React from 'react'
import { View, Text, StyleSheet, Button, ImageBackground, Dimensions } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'


const GameOverScreen = (props) => {

    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../assets/images/numberBackground.png')} style={styles.backgroundImage}>
                <Card style={styles.card}>
                    <Text style={styles.title}>Game Over</Text>
                    <Text style={styles.description}>It took your phone</Text>
                    <Text style={styles.guessRounds}>{props.guessRounds}</Text>
                    <Text style={styles.description}>rounds to guess the number</Text>
                    <Text style={styles.rounds}>{props.selectedNumber}</Text>
                    <Button title='Play Again' color={Colors.primary} onPress={props.handlePlayAgain} />
                </Card>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    card: {
        marginVertical: 10,
        alignItems: 'center',
        width: Dimensions.get('window').width / 1.3,
        borderColor: Colors.secondary,
        borderWidth: 1,
    },
    description: {
        color: Colors.secondary,
        fontSize: 25,
        paddingVertical: 3,
        fontFamily: 'covered-by-your-grace',
        textAlign: "center"
    },
    rounds: {
        fontSize: 60,
        color: Colors.fourth,
        fontFamily: 'monoton-regular'
    },
    guessRounds: {
        fontSize: 60,
        color: Colors.third,
        fontFamily: 'monoton-regular'
    },
    computerResponse: {
        color: Colors.third,
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 5,
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