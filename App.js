import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from "./components/Header";
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return (
    Font.loadAsync({
      "OpenSans": require('./fonts/OpenSans-Regular.ttf'),
      "OpenSans-Bold": require('./fonts/OpenSans-Bold.ttf'),
      "Roboto": require('./fonts/Roboto-Regular.ttf'),
      "Roboto-Bold": require('./fonts/Roboto-Regular.ttf'),
      "Roboto-Light": require('./fonts/Roboto-Light.ttf'),
      "Roboto-Medium": require('./fonts/Roboto-Medium.ttf')
    })
  );
};

export default function App() {
  const [userNumber, setUserNumber] = useState();  
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  if(!dataLoaded)
  {
    return (
    <AppLoading  
       startAsync={fetchFonts}
       onFinish={()=>{setDataLoaded(true);}}
       onError={(err)=>{console.log(err)}}
    />
    )
  }

  const onGameStarted = (selectedNumber) => {
    setUserNumber(selectedNumber);    
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
  //test
  //content = <GameOverScreen />
  return (    
      <SafeAreaView style={styles.screen}>      
        <Header title="Guess a Number" />
        {content}      
      </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
