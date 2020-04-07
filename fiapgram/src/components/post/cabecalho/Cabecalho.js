import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import estilos from './estilo.android';

export default class Cabecalho extends React.Component {
    render() {
        return (
            <View style={estilos.container}>
                <Image
                    style={estilos.imagem}
                    source={{ uri: this.props.src }} />
                <Text style={estilos.nome}>{this.props.usuario}</Text>
            </View>
        );
    }
}

