import React, { useState, useRef, useEffect } from 'react';
import {Text, View, StyleSheet, Button, Alert, ScrollView} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import GameOverScreen from '../screens/GameOverScreen';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import BodyText from '../components/BodyText';

const GameScreen = (props) => {
  const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    const rnd = Math.random();    
    const randomNumber = Math.floor(rnd*(max-min)) + min; 

    if(randomNumber === exclude)
      generateRandomNumber(min, max, exclude);
    else
      return randomNumber;            
    };

  //UseRef variables survive Render cycles. 
  //Similar to useState variables but re-render does not happen when these values change 
  minNumber = useRef(0);
  maxNumber = useRef(100);

  var currentGuess = generateRandomNumber(minNumber.current,maxNumber.current,props.userNumber);
  const [guessedNumber, setGuessedNumber] = useState(currentGuess);
  const [guessList, setGuessList] = useState([currentGuess]);

  const RenderItem = (guess, index) => (
    <View key={guess} style={styles.listItem}>
      <BodyText>#{guessList.length-index}</BodyText>
      <BodyText>{guess}</BodyText>
    </View> 
    ) 
      
  const nextGuessHandler = (direction) => {
    //Validate
    if( (direction === 'lower' && guessedNumber < props.userNumber) || 
        (direction === 'greater' && guessedNumber > props.userNumber)) {
          Alert.alert(
            'Wrong Direction',
            'You know that is wrong!!', 
            [
              {text: "Okay", style:'destructive'}
            ]
          );5454
          return;
        }
    
    //adjust lower and upper bounds of next random number 
    if(direction === 'lower')
        maxNumber.current = guessedNumber;
    else
        minNumber.current = guessedNumber + 1;
            
    //Guess next random number
    const nextGuess = generateRandomNumber(minNumber.current, maxNumber.current, guessedNumber)
    setGuessedNumber(nextGuess);
    
    //Keep track of guess count
    setGuessList(varGuessList => [nextGuess, ...varGuessList]);
  };

  const {userNumber, onGameOver}  = props;
  //useEffect React hook allows to logic to be executed AFTER every Render cycle
  //If you pass the optional dependencies, then useEffect only executes logic if any of the dependency values changed
  useEffect(() => {  
    if(guessedNumber === props.userNumber)
      props.onGameOver(guessList.length);  
  },[guessedNumber, userNumber, onGameOver, guessList]);

  console.log("minNumber:"+ minNumber.current);
  console.log("maxNumber:"+ maxNumber.current);

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>                
      <NumberContainer style={{marginTop:40}}>{guessedNumber}</NumberContainer>  
      
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={24} />
        </MainButton>  
        <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
          <MaterialIcons name="add" size={24} />
        </MainButton>                
      </Card>            
        <ScrollView style={styles.list}>
          {          
              guessList.map((guess, index) => (              
                RenderItem(guess, index)
              ))            
          }
        </ScrollView>     
    </View>
    );34
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
  listItem: {    
    borderWidth: 0.5,
    width: '100%',
    marginVertical: 5,
    borderRadius: 10,
    padding: 5,    
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  }, 
  list: {
    flex: 1,
    width: '60%',
    marginTop: 20,
  }
});

export default GameScreen;