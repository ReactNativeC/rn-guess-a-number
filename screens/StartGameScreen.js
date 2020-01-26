import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import GlobalStyles from '../constants/global-styles';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) =>  {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 3.4);

  console.log('start of the rendering. width: ' + buttonWidth);
  
  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 3.4);
      console.log('layout updated');
      console.log('width: ' + buttonWidth);
    }
    Dimensions.addEventListener('change',updateLayout);
    console.log('useEffect - outside of return');
    
    //cleaning up previously added listeners. 
    //this runs before the above code
    return () => {
      console.log('useEffect - inside return');
      Dimensions.removeEventListener('change', updateLayout);
    };    
  });



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
        <TitleText>You Selected</TitleText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton  onPress={() => props.onStartNewGame(selectedNumber)}>START GAME</MainButton>        
      </Card>
  }

  //test
  //print resolution of the device
  //console.log("resuloution(wxh):" + Dimensions.get('window').width.toString() + " x " + Dimensions.get('window').height.toString())

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={50}>
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss()}}>
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game</TitleText>
            <Card style={styles.inputContainer}>
              <TitleText>Select a Number</TitleText>
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
                <MainButton style={{width: buttonWidth}} onPress={ResetInputHandler}>Reset</MainButton>
                <MainButton style={{width: buttonWidth}} onPress={ConfirmInputHandler}>Confirm</MainButton>                   
              </View>
            </Card> 
            {ConfirmedOutput}
        </View>
        </TouchableWithoutFeedback>    
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center',
    padding: 10,
  }, 
  inputContainer: {
    width: Dimensions.get('window').width, 
    width: '90%',
    minWidth: 270,
    maxWidth: '95%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContainer: {    
    flexDirection: 'row',
    width: '100%',    
    justifyContent: 'space-around',    
    paddingHorizontal: 15,
    marginVertical: Dimensions.get('window').height < 600 ? 5 : 30,
  }, 
  button: {
    width: StartGameScreen.buttonWidth,    
  },
  input: {
    width: 50, 
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',   
  },
  title: {    
    marginVertical: 20,    
  },
});

export default StartGameScreen;