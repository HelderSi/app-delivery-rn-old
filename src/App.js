import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Pedido from './pages/Pedido';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pedido />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
