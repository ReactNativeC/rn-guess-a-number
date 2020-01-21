import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./components/Header";
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();  
  const [guessRounds, setGuessRounds] = useState(0);

  const onGameStarted = (selectedNumber) => {
    setUserNumber(selectedNumber);
    console.log("onGameStarted invoked")
  }
  const onGameOver = (roundCount) => {
    setGuessRounds(roundCount);            
  }
  const onNewGame = () => {
    setUserNumber('');
    setGuessRounds(0);
  }

  let content = <StartGameScreen onStartNewGame={onGameStarted} />;
  
  if(userNumber && guessRounds <=0)
    content = <GameScreen userNumber={userNumber} onGameOver={onGameOver}  />;
  else if(guessRounds > 0)
    content = <GameOverScreen rounds={guessRounds} userNumber={userNumber} onReplay={onNewGame} />

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
