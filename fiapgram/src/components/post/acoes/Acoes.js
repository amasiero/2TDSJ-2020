import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart as sHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as rHeart } from '@fortawesome/free-regular-svg-icons';
import estilo from './estilo';

export default class Acoes extends React.Component {
    render() {
        return (
            <View style={estilo.container}>
                <FontAwesomeIcon
                    icon={false ? sHeart : rHeart}
                    size={32}
                    style={false ? estilo.curtiu : {}} />
                <Text style={estilo.curtidas}>2 curtidas</Text>
            </View>
        );
    }
}