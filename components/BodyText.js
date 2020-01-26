import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const BodyText = (props) => {
  return (
    <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Bold',         
  }
});

export default BodyText