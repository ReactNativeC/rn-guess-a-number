import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import Colors from '../constants/colors';


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
    backgroundColor: Platform.OS == 'android' ? Colors.primary : 'white',
    paddingTop: 36,
    justifyContent: 'center',
    alignItems: 'center',     
    borderBottomColor: Platform.OS == 'ios' ? '#ccc' : 'white',
    borderBottomWidth: Platform.OS == 'ios' ? 1 : 0,
  },
  headerTitle: {
    fontSize: Dimensions.get('window').width < 400 ? 18 : 25, 
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    color: Platform.OS == 'ios' ? Colors.primary : 'white',
  },
});

export default Header;