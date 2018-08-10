import React, {Component} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

import { colors, metrics } from '../styles';

export default class Produto extends Component {

    state ={
        amount: 0,
    }

    constructor(props){
        super(props)
    }

    _increment = () => {
        this.setState( prev =>({
            amount: ++prev.amount
        }))
    }

    _decrement = () => {
        if ( this.state.amount === 0 ) return null;
        this.setState( prev =>({
            amount: --prev.amount
        }))
    }


    render(){
        return (
            <View style={styles.box}>
                <View style={styles.info}>
                    <Text>{ this.props.nome }</Text>
                    <Text>R$ { this.props.preco }</Text>
                </View>
                <View style={styles.quantity}>
                    <Text style={styles.quantityValue}>{this.state.amount}</Text>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={ () => this._increment() }>
                            <Text>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={ () => this._decrement() }>
                            <Text>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        flexDirection: 'row',
        margin: metrics.baseMargin/2,
        padding: metrics.basePadding,
        backgroundColor: colors.white,
        elevation: 4,
        justifyContent: 'space-between',
        borderRadius: metrics.baseRadius,
    },
    info:{


    },
    quantity:{
        flexDirection: 'row',
    },
    button:{

    },
    quantityValue:{
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: metrics.baseMargin
    }
})