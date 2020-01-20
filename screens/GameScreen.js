import React, { useState } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const GameScreen = (props) => {
  const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random()*(max-min)) + min; 
    
    if(randomNumber === exclude)
      generateRandomNumber(min, max, exclude);
    else
      return randomNumber;
  };

  const [guessedNumber, setGuessedNumber] = useState(generateRandomNumber(0,100,props.userNumber));
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(100);

  const lowerButtonHandler = () => {          
    setGuessedNumber(generateRandomNumber(minNumber, guessedNumber, ''));
    setMaxNumber(guessedNumber); 
  };

  const greaterButtonHandler = () => {                  
    setGuessedNumber(generateRandomNumber(guessedNumber, maxNumber, ''));
    setMinNumber(guessedNumber); 
  };
  

  let GameOverMessage = <Text> </Text>;
  if(guessedNumber === props.userNumber)
    GameOverMessage = <Text>Game Over</Text>;

  console.log("minNumber:"+ minNumber);
  console.log("maxNumber:"+ maxNumber);

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{guessedNumber}</NumberContainer>  
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>        
          <Button title="LOWER"  onPress={lowerButtonHandler} />
        </View>
        <View style={styles.button}>
          <Button title="GREATER" onPress={greaterButtonHandler} />
        </View>                
      </Card>      
      {GameOverMessage}
    </View>
    );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',   
    width: 300, 
    maxWidth: '80%'
  }, 
  button: {
    width:'40%'
  }
});

export default GameScreen;