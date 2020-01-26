import React from 'react';
import { Text, View, StyleSheet, ButtonComponent, Dimensions, TouchableNativeFeedback, TouchableOpacity, Platform, Button } from 'react-native';
import Colors from '../constants/colors';
import { hide } from 'expo/build/launch/SplashScreen';


const MainButton = (props) => {
  let ButtonComponent  = TouchableOpacity;

  if(Platform.OS == 'android' && Platform.Version >= 21)
    ButtonComponent = TouchableNativeFeedback;

  return ( 
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.60} onPress={props.onPress}>
        <View style={{ ...styles.button, ...props.style }}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>   
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: Dimensions.get('window').width < 400 ? 8 : 13,
    paddingHorizontal:Dimensions.get('window').width < 400 ? 10: 20,
    backgroundColor: Colors.primary,
    borderRadius: Dimensions.get('window').width < 400 ? 15 : 25,
    alignItems: 'center',
    minWidth: Dimensions.get('window').width /5,    
  },
  buttonContainer: {
    borderRadius: Dimensions.get('window').width < 400 ? 15 : 25,
    overflow: "hidden"
  },
  buttonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: Dimensions.get('window').width < 400 ? 12 : 18,
    color: 'white',
  }
});

export default MainButton;