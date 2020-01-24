import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import GlobalStyles from '../constants/global-styles';
import TitleText from '../components/TitleText';

const StartGameScreen = (props) =>  {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const InputTextHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const ResetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const ConfirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99)
      {
        Alert.alert(
          'Invalid Number',
          'Number must be between 0 and 99',
          [               
            { text: 'Cancel', style: 'cancel', onPress: () => {} },
            { text: 'OK', style: 'default', onPress: ()=> {} },                            
          ]
        );
        return;
      }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let ConfirmedOutput;

  if(confirmed) {
    ConfirmedOutput = 
      <Card style={styles.summaryContainer}>
        <Text style={GlobalStyles.bodyText}>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartNewGame(selectedNumber)} />        
      </Card>
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss()}}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game</TitleText>
        <Card style={styles.inputContainer}>
          <Text style={GlobalStyles.headerTitle}>Select a Number</Text>
          <Input 
            style={styles.input}
            blurOnSubmit
            autoFocus={true}
            autoCapitalize='none'      
            spellCheck={false}
            keyboardType='number-pad'
            returnType='done'
            maxLength={2}       
            value={enteredValue}
            onChangeText={InputTextHandler}           
          />
          <View style={styles.buttonContainer} >
            <TouchableOpacity style={styles.button}  onPress={ResetInputHandler} activeOpacity={0.6}>
              <Card style={{padding:5, alignItems:'center'}}>
                <TitleText style={{color:Colors.accent}}>Reset</TitleText>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={ConfirmInputHandler} activeOpacity={0.6}>
              <Card style={{padding:5, alignItems:'center'}}>
                <TitleText style={{color:Colors.primary}}>Confirm</TitleText>
              </Card>
            </TouchableOpacity>                  
          </View>
        </Card> 
        {ConfirmedOutput}
    </View>
    </TouchableWithoutFeedback>    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center',
    padding: 10,
  }, 
  inputContainer: {
    width: 300, 
    maxWidth: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContainer: {    
    flexDirection: 'row',
    width: '100%',    
    justifyContent: 'space-between',    
    paddingHorizontal: 15,
    marginTop: 20,
  }, 
  title: {    
    marginVertical: 20,    
  },
  button: {
    width: '40%',
  },
  input: {
    width: 50, 
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',   
  }
});

export default StartGameScreen;