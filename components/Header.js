import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import { processFontFamily } from 'expo-font';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles =  StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: Colors.primary,
    paddingTop: 36,
    justifyContent: 'center',
    alignItems: 'center',     
  },
  headerTitle: {
    fontSize: 25, 
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    color: 'white',
  },
});

export default Header;