import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={{...styles.container, ...props.style}}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2, 
    borderColor: Colors.accent,
    padding: Dimensions.get('window').width < 400 ? 5 : 10, 
    marginVertical: 10, 
    borderRadius: 10, 
  }, 
  number: {
    fontSize: Dimensions.get('window').width < 400 ? 14 : 22, 
    color: Colors.accent,
  }

});

export default NumberContainer;