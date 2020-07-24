import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start A New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput placeholder='Number' />
                <View style={styles.buttonContainer}>
                    <View style={styles.confirmButton} >
                        <Button title="Confirm" color={Colors.primary} />
                    </View>
                    <View style={styles.resetButton}>
                        <Button title="Reset" color={Colors.third} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.primary
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
    }
})

export default StartGameScreen