import React, {Component} from 'react';
import { View, Text, FlatList } from 'react-native'

import Produto from './Produto';



export default class Menu extends Component {

    state = {
        lista_produtos: [
            {id:'1', nome:'X-Salada', preco:'10,00'},
            {id:'2', nome:'X-Bacon', preco:'15,00'},
            {id:'3', nome:'X-Tudo', preco:'20,00'},
            {id:'4', nome:'Misto-quente', preco:'5,00'},
            {id:'5', nome:'X-Burguer', preco:'15,00'},
        ]
    }

    render(){
        return (
            <FlatList
                data={this.state.lista_produtos}
                renderItem={ ({item}) => <Produto nome={item.nome} preco={item.preco} />}
                keyExtractor={ (item) => item.id }
            />
        )
    }
} 