import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Pedido from './pages/Pedido';

import { colors } from './styles';

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
    backgroundColor: colors.lighter,
  },
});
