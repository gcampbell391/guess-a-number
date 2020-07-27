import React, { useState } from 'react';
import { StyleSheet, View, Keyboard, Alert } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Header from './components/Header.js';
import Footer from './components/Footer'
import StartGameScreen from './screens/StartGameScreen.js';
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'


const fetchFonts = () => {
  return Font.loadAsync({
    'monoton-regular': require('./assets/fonts/Monoton-Regular.ttf'),
    'covered-by-your-grace': require('./assets/fonts/CoveredByYourGrace-Regular.ttf'),
    'share-tech-mono': require('./assets/fonts/ShareTechMono-Regular.ttf')
  })
}

export default function App() {

  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()
  const [startGame, setStartGame] = useState(false)
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />)
  }

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

  //Handles starting the game
  const handleStartGame = () => {
    setStartGame(true)
    setGuessRounds(0)
  }

  //Handles ending the game
  const handleGameOver = (numOfRounds) => {
    setGuessRounds(numOfRounds)
  }

  //Handles the play again button
  const handlePlayAgain = () => {
    setGuessRounds(0)
    setEnteredValue('')
    setSelectedNumber()
    setStartGame(false)
    setConfirmed(false)
  }


  let content = <StartGameScreen
    selectedNumber={selectedNumber}
    enteredValue={enteredValue}
    numberInputHandle={numberInputHandle}
    confirmValues={confirmValues}
    resetValues={resetValues}
    confirmed={confirmed}
    handleStartGame={handleStartGame}
  />
  if (startGame && guessRounds <= 0) {
    content = <GameScreen
      userChoice={selectedNumber}
      onGameOver={handleGameOver}
    />
  } else if (guessRounds > 0) {
    content = <GameOverScreen guessRounds={guessRounds} handlePlayAgain={handlePlayAgain} />
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess A Number' />
      {content}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
