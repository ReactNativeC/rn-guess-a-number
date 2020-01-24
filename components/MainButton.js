import React from 'react'; 
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors  from '../constants/colors';


const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.60} onPress={props.onPress}>

      <View style={{...styles.button, ...props.style}}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
  
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 13, 
    paddingHorizontal: 20, 
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: 'OpenSans-Bold', 
    fontSize: 18,
    color: 'white',
  }
});

export default MainButton;