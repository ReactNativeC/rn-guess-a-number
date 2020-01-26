import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
const GameOverScreen = (props) => {
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height);
    }
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    }
  });
    
  return (
    <ScrollView>
    <View style={styles.screen}>         
      <TitleText style={styles.gameOverTitle}> Game Over </TitleText>
      <View style={availableDeviceHeight  < 500? styles.ImageContainerInLandscapeMopde : styles.ImageContainer}>
        <Image style={styles.image}
          source={{uri: 'https://www.fodors.com/wp-content/uploads/2019/07/NeedToKnowNYC__HERO_Midtown-West.jpg'}} 
          resizeMode='cover'
        />
      </View>
      <TitleText style={styles.messageText}>Number of Guess Rounds are <TitleText style={styles.messageStats}>{props.rounds}</TitleText> and the user number was: <TitleText style={styles.messageStats}>{props.userNumber}</TitleText></TitleText>
      
      <MainButton style={styles.button} onPress={props.onReplay} >START NEW GAME</MainButton>   
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center',    
    justifyContent:'center'
  },
  gameOverTitle: {
    fontSize: Dimensions.get('window').width < 400 ? 30 : 50, 
    color: Colors.accent
  }, 
  startNewGameTitle: {
    fontSize: 25, 
    color: Colors.primary
  },
  ImageContainer: {
    width: Dimensions.get('window').width*0.8,
    height:Dimensions.get('window').width*0.8,
    borderRadius: (Dimensions.get('window').width*0.8)/2,
    borderWidth: 2,
    marginVertical:  Dimensions.get('window').width < 400 ? 10: 40,
    overflow: 'hidden',    
  }, 
  ImageContainerInLandscapeMopde: {
    width: Dimensions.get('window').height*0.3,
    height:Dimensions.get('window').height*0.3,
    borderRadius: (Dimensions.get('window').width*0.3)/2,
    marginVertical: 5,
    borderWidth: 2,
    overflow: 'hidden',  
  },
  image: {
    width: '100%',
    height: '100%',
  }, 
  button: {
    marginVertical:  Dimensions.get('window').width < 400 ? 10 : 20,        
  },
  messageText: {
    marginHorizontal: 15,
    textAlign: 'center',
    fontSize: Dimensions.get('window').width < 400 ? 14: 22,
  }, 
  messageStats: {
    color: Colors.primary,
    fontSize: Dimensions.get('window').width < 400 ? 14: 22,
  }


});

export default GameOverScreen;