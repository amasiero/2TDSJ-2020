import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => console.warn('Menu clicado')}>
                    <FontAwesomeIcon icon={faBars} size={32} style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.title} >MEU PERFIL</Text>
                <TouchableOpacity onPress={() => console.warn('Config clicado')}>
                    <FontAwesomeIcon icon={faCog} size={32} style={styles.icon}/>
                </TouchableOpacity>                
            </View>
        )
    }
}