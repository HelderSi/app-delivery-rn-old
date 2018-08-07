import React from 'react';

import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import Menu from '../components/Menu';

import {metrics, colors} from '../styles';


export default Pedido = props =>(
    <View style={styles.container}>
        <StatusBar
            barStyle='light-content'
            backgroundColor={colors.darkPrimary}
        />
        <View style={styles.header}>
            <Header />
        </View>
        <View  style={styles.menu}>
            <Menu />
        </View>
        <View style={styles.totalBox}>
            <Text style={styles.textTotal}>R$ 0,00</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton} >Confirmar</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header: {
        flex: 1,
        paddingTop: metrics.basePadding,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu:{
        flex: 8,
        padding: metrics.basePadding,
    },
    totalBox:{
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    textTotal:{
        fontSize: 25,
    },
    button:{
        flex: 1,
        backgroundColor: colors.success,
        justifyContent: 'center',
        alignItems: 'center',
        margin: metrics.baseMargin,
        borderRadius: metrics.baseRadius,
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkTransparent
    }

});