import React, { Component } from 'react';
import { 
  AppRegistry,
  Platform,
  StyleSheet, 
  Text,
  Touchable,
  View } from 'react-native';

import Login from './screens/LoginScreen';

export default class App extends React.Component {

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>

      <Login/>
        
       

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f9fc'
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#000'
  }
});
