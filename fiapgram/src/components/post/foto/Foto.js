import React from 'react';
import { Image } from 'react-native';
import estilo from './estilo';

export default class Foto extends React.Component {
    render() {
        return (
            <Image style={estilo.imagem}
                source={{ uri: this.props.src }} />
        );
    }
}

