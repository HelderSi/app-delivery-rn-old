import React from 'react';
import { View, Text } from 'react-native'

import Produto from './Produto';

export default Menu = props => (
    <View>
        <Produto nome='X-Salada' preco='10,00' />
        <Produto nome='X-Bacon' preco='20,00'/>
    </View>
)