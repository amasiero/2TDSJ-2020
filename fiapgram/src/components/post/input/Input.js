import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import estilo from './estilo';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment : ''
        }
    }

    render() {
        return (
            <View style={estilo.container}>
                <TextInput style={estilo.input} 
                    placeholder='Adicione um comentário...' 
                    underlineColorAndroid='transparent' 
                    ref={input => this.inputComment = input} 
                    onChangeText={comment => this.setState({ comment })}/>
                <TouchableOpacity onPress={() => this.props.handleComments(this.inputComment, this.state.comment)}>
                    <Text style={estilo.publish}>Publicar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}