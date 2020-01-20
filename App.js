import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./components/Header";
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();  
  const [gameOver, setGameOver] = useState(false);

  const onGameStarted = (selectedNumber) => {
    setUserNumber(selectedNumber);
    console.log("onGameStarted invoked")
  }
  const onGameOver = (isGameOver) => {
    setGameOver(isGameOver);
    
    if(!isGameOver)
      onGameStarted('');
  }

  let content = <StartGameScreen onStartNewGame={onGameStarted} />;
  
  if(userNumber)
    content = <GameScreen userNumber={userNumber} onGameOver={onGameOver}/>;

  if(gameOver)
    content = <GameOverScreen onGameOver={onGameOver} />

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
