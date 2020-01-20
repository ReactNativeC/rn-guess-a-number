import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = (props) =>  {
  const [enteredValue, setEnteredValue] = useState('');
  const InputTextHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>

      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>

        <Input 
          style={styles.input}
          blurOnSubmit
          autoFocus='true'
          autoCapitalize='none'      
          spellCheck='none'
          keyboardType='number-pad'
          returnType='done'
          maxLength={2}       
          value={enteredValue}
          onChangeText={InputTextHandler}
        />
        <View style={styles.buttonContainer} >
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color = {Colors.accent}/>
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color = {Colors.primary} />
          </View>                    
        </View>
      </Card> 

    </View>
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
  },
  buttonContainer: {    
    flexDirection: 'row',
    width: '100%',    
    justifyContent: 'space-between',    
    paddingHorizontal: 15,
  }, 
  title: {
    fontSize: 20, 
    marginVertical: 10,
  },
  button: {
    width: '40%',
  },
  input: {
    width: 50, 
    textAlign: 'center'
  }
});

export default StartGameScreen;