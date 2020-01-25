import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../constants/colors';


const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.60} onPress={props.onPress}>

      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>

    </TouchableOpacity>
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
  buttonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: Dimensions.get('window').width < 400 ? 12 : 18,
    color: 'white',
  }
});

export default MainButton;