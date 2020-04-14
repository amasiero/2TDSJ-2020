import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart as sHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as rHeart } from '@fortawesome/free-regular-svg-icons';
import estilo from './estilo';

export default class Acoes extends React.Component {
    render() {
        return (
            <View style={estilo.container}>
                <TouchableOpacity onPress={() => this.props.handleLike()}>
                    <FontAwesomeIcon
                        icon={this.props.like ? sHeart : rHeart}
                        size={32}
                        style={this.props.like ? estilo.curtiu : {}} />
                </TouchableOpacity>
                <Text style={estilo.curtidas}>
                    {this.props.likes.length}
                    {this.props.likes.length == 1 ? ' curtida' : ' curtidas'}
                </Text>
            </View>
        );
    }
}