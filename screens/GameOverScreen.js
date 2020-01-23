import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.gameOverCard}>
        <TitleText style={styles.gameOverTitle}>Game Over</TitleText>
        <TitleText>Guess Rounds: {props.rounds}</TitleText>
        <TitleText>User number was: {props.userNumber}</TitleText>
      </View>  
   
      <TouchableOpacity activeOpacity={0.65} onPress={() => props.onReplay()}>
        <Card style={styles.startNewGameCard}>
          <TitleText style={styles.startNewGameTitle}>Start a New Game!</TitleText>
        </Card>
      </TouchableOpacity>      
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  gameOverCard: {    
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80%',
  },
  startNewGameCard:{
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    
  },
  gameOverTitle: {
    fontSize: 50, 
    color: Colors.accent
  }, 
  startNewGameTitle: {
    fontSize: 25, 
    color: Colors.primary
  }

});

export default GameOverScreen;