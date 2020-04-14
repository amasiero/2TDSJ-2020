import React from 'react';
import { View, Text }  from 'react-native';
import estilo from './estilo';

export default class Comentarios extends React.Component {
    render() {
        const { comments } = this.props;
        return (
            comments.map((c, index) => 
                <View key={index} style={estilo.container}>
                    <Text style={estilo.user}>{c.user}</Text>
                    <Text numberOfLines={3}>{c.comment}</Text>
                </View>
            )
        )
    }
}