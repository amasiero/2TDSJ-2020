import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

export default class Legenda extends React.Component {
    render() {
        return (
            <Text style={estilo.legenda} numberOfLines={3}>
                <Text style={estilo.usuario}>
                    {this.props.usuario}
                </Text>
                {this.props.legenda}
            </Text>
        );
    }
}