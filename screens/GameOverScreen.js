import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>     
      <TitleText style={styles.gameOverTitle}>Game Over</TitleText>
      <View style={styles.ImageContainer}>
        <Image style={styles.image}
          source={{uri: 'https://i.ytimg.com/vi/YxfnUPqWV0k/maxresdefault.jpg'}} 
          resizeMode='cover'
        />
      </View>
      <TitleText style={styles.messageText}>Number of Guess Rounds are <TitleText style={styles.messageStats}>{props.rounds}</TitleText> and the user number was: <TitleText style={styles.messageStats}>{props.userNumber}</TitleText></TitleText>
         
      <TouchableOpacity activeOpacity={0.65} onPress={() => props.onReplay()} style={styles.button}>
        <Card style={styles.startNewGameCard}>
          <TitleText style={styles.startNewGameTitle}>Start a New Game</TitleText>
        </Card>
      </TouchableOpacity>      
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center',    
    justifyContent:'center'
  },
  gameOverTitle: {
    fontSize: 50, 
    color: Colors.accent
  }, 
  startNewGameTitle: {
    fontSize: 25, 
    color: Colors.primary
  },
  ImageContainer: {
    width: 300,
    height:300,
    borderRadius: 150,
    borderWidth: 2,
    marginVertical: 40,
    overflow: 'hidden',    
  }, 
  image: {
    width: '100%',
    height: '100%',
  }, 
  button: {
    marginVertical: 30,
  },
  messageText: {
    marginHorizontal: 15,
    textAlign: 'center',
    fontSize: 22,
  }, 
  messageStats: {
    color: Colors.primary,
    fontSize: 22,
  }


});

export default GameOverScreen;