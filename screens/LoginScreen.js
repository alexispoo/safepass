import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import Animation from 'lottie-react-native';

import anim from './assets/newAnimation.json';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
             <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 80,
              height: 80
            }}
            loop={true}
            source={anim}
          />
        </View>
                <Text 
                    style={{fontSize: 27}}>
                    Iniciar Sesión
                </Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' />
                <View style={{margin:7}} />
                <Button 
                        onPress={this.props.onLoginPress}
                        title="Submit"
                    />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#f7f9fc'
    }
});


AppRegistry.registerComponent('lottieloader', () => lottieloader);