import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { StyleSheet, View, Text } from 'react-native';
import { Screen } from '@shoutem/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 60,
    width: 60,
    height: 60,
    padding: 10,
    margin: 40
  },
  icon: {
    fontSize: 28,
  },
  message: {
    marginTop: 24,
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.captureImage = this.captureImage.bind(this);
  }

  /**
   * captureImage - captures an image
   *
   */
  captureImage() {
    const options = {};
    // options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Screen style={styles.container}>
        <Camera
          style={styles.preview}
          ref={(cam) => { this.camera = cam; }}
          aspect={Camera.constants.Aspect.fill}
        >
          <View style={styles.capture} onPress={this.captureImage}>
            <Text style={styles.icon}>📷</Text>
          </View>
        </Camera>
      </Screen>
    );
  }
}
