import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import Colors from '../constants/colors';


const Header = props => {
  return (
    <View style={{
      ...styles.headerBase, ...Platform.select(
        {
          "ios": styles.headerIOS,
          "android": styles.headerAndroid
        })
    }}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles =  StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,   
    paddingTop: 36,
    justifyContent: 'center',
    alignItems: 'center',         
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc' ,
    borderBottomWidth: 1 ,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,    
  },
  headerTitle: {
    fontSize: Dimensions.get('window').width < 400 ? 18 : 25, 
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    color: Platform.OS == 'ios' ? Colors.primary : 'white',
  },
});

export default Header;