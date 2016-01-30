'use strict';

import Main from './App/Components/Main';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

class fflyNative extends Component {
  render() {
    return (
      <NavigatorIOS
      style = {styles.container}
      initialRoute={{
        title: 'ffly',
        component: Main
      }} />
    );
  }
}

AppRegistry.registerComponent('fflyNative', () => fflyNative);
