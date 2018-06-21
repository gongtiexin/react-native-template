import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, WebView } from 'react-native';

//获取设备的宽度和高度
const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          bounces={false}
          scalesPageToFit={true}
          style={styles.webView}
          source={{ uri: "http://10.1.8.100:30000" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    width: deviceWidth,
    height: deviceHeight,
  },
});
