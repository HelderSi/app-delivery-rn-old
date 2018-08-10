import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    StatusBar,
 } from 'react-native'

import Header from '../components/Header';
import Menu from '../components/Menu';

import { colors, metrics } from '../styles';

export default Pedido = props => (
    <View style={styles.container}>
        <StatusBar
            backgroundColor={colors.darkPrimary}
            barStyle="light-content"
        />
        <View style={styles.header}>
            <Header />
        </View>
        <View style={styles.menu}>
            <Menu />
        </View>
        <View style={styles.total}>
            <Text style={styles.valueTotal}>R$ 0,00</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Confirmar Pedido</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: metrics.basePadding,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu:{
        flex: 8,
        margin: metrics.baseMargin,
    },
    total:{
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    button:{
        flex: 1,
        backgroundColor: colors.success,
        margin: metrics.baseMargin,
        borderRadius: metrics.baseRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkTransparent
    },
    valueTotal:{
        fontSize: 25
    }


})


